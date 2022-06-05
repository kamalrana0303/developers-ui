import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { bucketAction, loginAction, pkceAction } from './action';
import { Code } from './app-data.model';
import { AuthService } from './auth.service';
import { generateCodeChallegeFromVerifier, generateCodeVerifier } from './utils/crypto.utils';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, @Inject('authService') private authService: AuthService) {}

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
          alert(JSON.stringify(token))
          if(token.access_token!=null){
            this.authService.storeAccessToken(token)
          }
          return bucketAction.successfullToken();
        }),  catchError(error=> of(bucketAction.failureToken(error))))
      })
    )
  })


  //fail to load pkce
}
