import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { loginAction, logoutAction } from '../data-access/action';
import { selectLoggedInStatus } from '../data-access/reducer';
import { map, tap } from 'rxjs';

@Component({
  selector: 'developers-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isOpen:boolean=true;
  isLoggedIn:boolean = false;
  $isLoggedIn=this.store.pipe(select(selectLoggedInStatus)).pipe(tap(isLoggedIn=> this.isLoggedIn = isLoggedIn));
  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(loginAction.checkToken())
  }
  routeToLogin(){
    this.router.navigate(['/auth']);
  }

  onClick() {
    // const params = [
    //     'response_type=code',
    //     'client_id='+ environment.clientId,
    //     'scope='+environment.scope,
    //     encodeURIComponent('redirect_uri=http://localhost:4200/login'),
    // ];
   // window.location.href = 'http://localhost:8080/oauth/authorize?' + params.join('&');

    if(this.isLoggedIn){
        this.store.dispatch(logoutAction.loggedOut())
    }
    else{
      this.store.dispatch(loginAction.initLogin())
    }
  }

}
