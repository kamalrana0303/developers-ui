import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { accountSelector } from '@developers/account/data-access';
import { urlPrefix } from '@developers/models';
import {  init, selectFirstName, selectLastName, selectProfile, selectProfileName, State } from '@developers/profile/data-access';
import { select, Store } from '@ngrx/store';


@Component({
  selector: 'developers-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  continue =`${urlPrefix["1.0"]}/${urlPrefix['2.0']}`;
  personalInfo$ = this.store.pipe(select(selectProfile));
  account$=this.store.pipe(select(accountSelector.selectAccount))
  firstName$= this.store.pipe(select(selectFirstName));
  lastName$= this.store.pipe(select(selectLastName));
  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    
  }
  name(){
    this.router.navigate([`${urlPrefix['2.0']}/${urlPrefix['2.0.1']}`], {queryParams: {'continue': this.continue }});
  }
  dob(){
    this.router.navigate([`${urlPrefix['2.0']}/${urlPrefix['2.0.2']}`], {queryParams: {'continue': this.continue}});
  }
  gender(){
    this.router.navigate([`${urlPrefix['2.0']}/${urlPrefix['2.0.3']}`], {queryParams: {'continue': this.continue}});
  }
}
