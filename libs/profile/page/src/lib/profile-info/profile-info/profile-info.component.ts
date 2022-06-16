import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  init, selectFirstName, selectLastName, selectProfile, selectProfileName, State } from '@developers/profile/data-access';
import { select, Store } from '@ngrx/store';
import { environment } from 'apps/dev/src/environments/environment';
import { map, tap } from 'rxjs';

@Component({
  selector: 'developers-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  personalInfo$ = this.store.pipe(select(selectProfile));
  firstName$= this.store.pipe(select(selectFirstName));
  lastName$= this.store.pipe(select(selectLastName));
  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(init())
  }

  name(){
    this.router.navigate(['/auth/profile/name'], {queryParams: {'continue': "/auth/profile"}})
  }

}
