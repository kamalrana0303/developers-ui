import { Component, OnInit } from '@angular/core';
import { loginAction } from '@developers/models';
import { Store } from '@ngrx/store';

@Component({
  selector: 'developers-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    
  }
  attemptToLogin(){
    this.store.dispatch(loginAction.initLogin())
  }

}
