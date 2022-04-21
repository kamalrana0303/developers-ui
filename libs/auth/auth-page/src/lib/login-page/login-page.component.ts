import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Authenticate, login, selectError, selectPending, State, } from '@developers/auth/data-access'

@Component({
  selector: 'developers-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error$= this.store.select(selectError);
  pending$ =this.store.select(selectPending);
  
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    
  }

  onLogin(credentials: Authenticate){
   this.store.dispatch(login({authenticate: credentials}))
  }

}
