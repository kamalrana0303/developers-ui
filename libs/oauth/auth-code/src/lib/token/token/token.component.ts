import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { init, loadTokenFromSessionSuccess, selectPKCE, State, Token } from '@developers/oauth/data-access';

import { Store } from '@ngrx/store';

@Component({
  template: `
    <a style="cursor: pointer;" (click)="route()"> Reg</a>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenComponent implements OnInit {

  constructor(private store: Store<State>, private activateRoute: ActivatedRoute,private router: Router) {
     
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

      this.router.navigate(["profile"])
    }


    if(this.activateRoute.snapshot.queryParamMap.has('code')){
      
      let x = this.activateRoute.snapshot.queryParamMap.get('code');
   
      this.store.dispatch(init({code: x}))
    }
    else{
      this.router.navigate(['authorized']);
    }

  }

  ngOnInit(): void {}

  route(){
    this.router.navigate(['reg'])
  }

}
