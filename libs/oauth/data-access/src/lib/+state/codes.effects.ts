import { Injectable, Optional } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import {  EMPTY, exhaustMap,of,switchMap} from 'rxjs';
import {State} from './reducers/index';
import * as CodesActions from './codes.actions';
import { generateCodeChallegeFromVerifier, generateCodeVerifier } from '../crypto.utils';
import { AuthConfigurations } from '../auth.config';
import { select, Store } from '@ngrx/store';

@Injectable()
export class CodesEffects {

  init$= createEffect(()=>this.actions$.pipe(
    ofType(CodesActions.init),
    map((action)=>  action.code),
      exhaustMap((code)=>{
        return this.authService.getToken(code).pipe(
          map(token=> {
            this.authService.saveTokenInSession(token)
            return CodesActions.loadTokenFromAPISuccess({token})
          })
        )
      })
    ));

    loadPKCE$= createEffect(()=> this.actions$.pipe(
      ofType(CodesActions.loadPKCE),
      exhaustMap(()=> {
        let verifer=generateCodeVerifier();
        sessionStorage.setItem("verifier", verifer);
        return generateCodeChallegeFromVerifier(verifer).then(
          codeChallenge=>  {  
            return CodesActions.loadPKCESuccess({pkce: {code_challenge: codeChallenge}})
          }
        )
      })
    ))

    loadPKCESuccess$= createEffect(()=> this.actions$.pipe(
      ofType(CodesActions.loadPKCESuccess),
      exhaustMap(()=>{
        return this.store.pipe(select('code_auth')).pipe(map(x=> x.auth.pkce?.code_challenge)).pipe(tap( cc=> {
            let ruri= this.generateLoginUri(cc, "S256", this.config)
            window.location.href=ruri
        }))
      })
    ), {dispatch: false})


    generateLoginUri(codeChallenge:string | any, codeChallengeMethod:string, config: AuthConfigurations): string{
      let redirect_uri=this.config.clientBaseUrl+"/token";
      let result= `${config.baseUrl}/oauth2/authorize?response_type=code&client_id=${config.clientId}&scope=${config.scope}&redirect_uri=${redirect_uri}&code_challenge=${codeChallenge}&code_challenge_method=${codeChallengeMethod}`;
      return result;
    }

  constructor(private readonly actions$: Actions, private authService: AuthenticationService, @Optional() private config: AuthConfigurations, private store: Store<{code_auth: State}>) {}
}
