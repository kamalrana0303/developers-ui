import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {Authenticate, login, selectError, selectPending, selectToken, State, } from '@developers/auth/data-access'
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'developers-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error$= this.store.pipe(map((x:{auth: State})=> x?.auth)).pipe(select(selectError));
  
  pending$ = null;//this.store.pipe(select(selectPending));
  
  constructor(private store: Store<{auth: State}>) { }

  ngOnInit(): void {
    
  }

  onLogin(credentials: Authenticate){
    
   this.store.dispatch(login({authenticate: credentials}))
  }

}
