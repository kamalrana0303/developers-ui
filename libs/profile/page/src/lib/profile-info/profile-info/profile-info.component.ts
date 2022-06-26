import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { accountSelector } from '@developers/account/data-access';
import {  init, selectFirstName, selectLastName, selectProfile, selectProfileName, State } from '@developers/profile/data-access';
import { select, Store } from '@ngrx/store';


@Component({
  selector: 'developers-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  personalInfo$ = this.store.pipe(select(selectProfile));
  account$=this.store.pipe(select(accountSelector.selectAccount))
  firstName$= this.store.pipe(select(selectFirstName));
  lastName$= this.store.pipe(select(selectLastName));
  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(init())
  }

  name(){
    this.router.navigate(['/auth/profile/name'], {queryParams: {'continue': "/auth/profile"}});
  }

  dob(){
    this.router.navigate(['/auth/profile/birthday'], {queryParams: {'continue': '/auth/profile'}});
  }
  gender(){
    this.router.navigate(['/auth/profile/gender'], {queryParams: {'continue': '/auth/profile'}});
  }

}
