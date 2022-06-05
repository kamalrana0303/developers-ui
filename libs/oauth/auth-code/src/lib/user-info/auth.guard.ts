import { HttpParams } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { generateCodeChallegeFromVerifier, generateCodeVerifier, init, loadPKCE, loadTokenFromSessionSuccess, State, Token } from '@developers/oauth/data-access';
import { select, Store } from '@ngrx/store';
import { AuthConfigurations } from 'libs/oauth/data-access/src/lib/auth.config';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<{code_auth: State}>,private router: Router, @Optional() private config: AuthConfigurations){
 
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(!!sessionStorage.getItem("access_token")){
      let tokenFromSession: Token= {
        access_token: sessionStorage.getItem("access_token"),
        refresh_token: sessionStorage.getItem("refresh_token"),
        expires_in:  sessionStorage.getItem("expires_in"),
        id_token: sessionStorage.getItem("id_token"),
        scope: sessionStorage.getItem("scope"),
        token_type: sessionStorage.getItem("type")
      }
      this.store.dispatch(loadTokenFromSessionSuccess({token: tokenFromSession}))
      return true;
    }

    return this.store.pipe(select('code_auth')).pipe(map((x)=> {
        if(x.auth?.token){
          this.router.navigate(['profile'])
          return false;
        }  
        this.store.dispatch(loadPKCE())
        return true
    }))
  }

  
  
}
`  `