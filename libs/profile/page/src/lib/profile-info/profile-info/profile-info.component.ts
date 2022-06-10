import { Component, OnInit } from '@angular/core';
import {  selectProfile, State } from '@developers/profile/data-access';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs';

@Component({
  selector: 'developers-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  personalInfo$ = this.store.pipe(select(selectProfile));
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
