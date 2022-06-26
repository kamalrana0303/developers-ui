import { Inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { LogoutPromptComponent } from '../logout-prompt/logout-prompt.component';
import { bucketAction, loginAction, logoutAction, pkceAction, tokenAction } from '@developers/models';

import { Code } from './app-data.model';
import { AuthService } from './auth.service';
import { generateCodeChallegeFromVerifier, generateCodeVerifier } from './utils/crypto.utils';
import { fetch } from '@nrwl/angular';
import { PortalBridgeService } from './portal-bridge.service';



@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, @Inject('authService') private authService: AuthService, private router: Router, private dialogService: MatDialog, private portalBridgeService: PortalBridgeService) {}

  checkToken$= createEffect(()=> this.actions$.pipe(
    ofType(loginAction.checkToken),
    exhaustMap(()=> {
      return this.authService.checkToken().then(isToken=> {
        if(isToken){
          return loginAction.loginSuccess()
        }
        return loginAction.loginStatus({loggedIn: false})
      }
    )}
  )));

  initLogin$= createEffect(()=> this.actions$.pipe(
    ofType(loginAction.initLogin),
    exhaustMap(()=>{
      return this.authService.checkToken().then(isToken=> {
        if(isToken){
          return loginAction.loginSuccess();
        }
        return pkceAction.loadPKCE();
      })
    })
  ))

  loadPKCE$= createEffect(()=> this.actions$.pipe(
    ofType(pkceAction.loadPKCE),
    exhaustMap(()=> {
     
      let verifer=generateCodeVerifier();
      sessionStorage.setItem("verifier", verifer);
      return generateCodeChallegeFromVerifier(verifer).then(
        codeChallenge=>  {  
          sessionStorage.setItem("code_challenge", codeChallenge)
          return pkceAction.loadPKCESuccess()
        }, error=> pkceAction.loadPKCEFailure()
      )
    })
  ))

  loadPKCESuccess$= createEffect(()=> this.actions$.pipe(
    ofType(pkceAction.loadPKCESuccess),
    exhaustMap(()=>{
      return this.authService.getCodeChallengeFromSessionStorage().then(codeChallenge=>{
        let ruri=this.authService.generateLoginUri(codeChallenge, 'S256');
        window.location.href= ruri
        return loginAction.redirectToAuthServerLoginPage()
      })
    })
  ))

  loadToken$= createEffect(()=>{
    return this.actions$.pipe(
      ofType(bucketAction.loadToken),
      exhaustMap((code:Code)=>{
        
        return this.authService.getToken(code.value).pipe(map(token=>{
          if(environment.scope == 'openid'){
            if(token.id_token!=null){
              this.authService.storeAccessToken(token)
            }
          }
          else{
            if(token.access_token!=null){
              this.authService.storeAccessToken(token)
            }
          }
          return bucketAction.successfullToken();
        }),  catchError(error=> of(bucketAction.failureToken(error))))
      })
    )
  })

  refreshToken$ = createEffect(()=> this.actions$.pipe(
    ofType(tokenAction.tokenExpired),
    exhaustMap(()=> {
      return this.authService.refreshToken().pipe(map( token => {
        if(environment.scope == 'openid'){
          if(token.id_token!=null){
            this.authService.storeAccessToken(token)
          }
        }
        else{
          if(token.access_token!=null){
            this.authService.storeAccessToken(token)
          }
        }
        return tokenAction.tokenRefreshed();
      }), catchError(error => of(tokenAction.tokenError(error))))
    })
  ))

  tokenError$= createEffect(()=> this.actions$.pipe(
    ofType(tokenAction.tokenError),
    fetch({
      run: (action) => {
     
        return logoutAction.loggedOutConfirmed()
      } 
    })
  ))

  loadTokenSuccessFully$= createEffect(()=> {
    return this.actions$.pipe(
      ofType(bucketAction.successfullToken),
      exhaustMap(()=> {
        return of(loginAction.loginSuccess())
      })
    )
  })

  loginSuccess$= createEffect(()=> {
    return this.actions$.pipe(
      ofType(loginAction.loginSuccess),
      exhaustMap(()=> {
        return of(loginAction.loginStatus({loggedIn: true}));
      })
    )
  })

  navigatOnLogin = createEffect(()=> {
    return this.actions$.pipe(
      ofType(loginAction.loginStatus),
      tap((loggedinStatus)=> {
        if(loggedinStatus.loggedIn){
          this.router.navigate(["/auth/home"])
        }
      })
    )
  },{ dispatch: false})

  navigateOnLogout$= createEffect(()=> {
    return this.actions$.pipe(
      ofType(logoutAction.loggedOutConfirmed),
      tap(()=> {
        
        this.router.navigate([""])
      })
    )
  }, {dispatch:false})

  loggedOut$= createEffect(()=> this.actions$.pipe(
    ofType(logoutAction.loggedOut),
    exhaustMap(()=> {
      return this.dialogService.open(LogoutPromptComponent)
      .afterClosed()
      .pipe(
        map(confirmed=> {
          if(confirmed){
            return logoutAction.loggedOutConfirmed()
          }
          else{
            return logoutAction.loggedOutCancelled()
          }
        })
      )
    })
  ))

  logoutConfirmation$= createEffect(()=>  this.actions$.pipe(
     ofType(logoutAction.loggedOutConfirmed),
     exhaustMap(()=> {
      return this.authService.loggeOut().pipe(map(x=> {
        if(x){
          return loginAction.loginStatus({loggedIn: false})
        }
        return loginAction.loginStatus({loggedIn: true})
      }))
     })
  ))
  //fail to load pkce
}