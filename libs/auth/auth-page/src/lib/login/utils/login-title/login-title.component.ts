import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {State, selectError} from "@developers/auth/data-access";
import { map } from 'rxjs';
@Component({
  selector: 'developers-login-title',
  templateUrl: './login-title.component.html',
  styleUrls: ['./login-title.component.scss']
})
export class LoginTitleComponent implements OnInit {
  error$= this.store.pipe(map((x:{auth: State})=> x?.auth)).pipe(select(selectError));
  constructor(private store: Store<{auth: State}>) { }
  ngOnInit(): void {
  }
}
