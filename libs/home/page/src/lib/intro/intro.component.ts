import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { selectFirstName, selectLastName, selectProfile, selectProfileName } from '@developers/profile/data-access';
import { Store } from '@ngrx/store';
import { selectAccount } from 'libs/account/data-access/src/lib/store/account.selector';
import { tap } from 'rxjs';

@Component({
  selector: 'developers-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  account$= this.store.select(selectAccount)
  firstName$ = this.store.select(selectFirstName)
  lastName$= this.store.select(selectLastName)
  open:boolean =false;
  @ViewChild(MatDrawer, {static:true}) drawer : MatDrawer | any;
  constructor(private store: Store) { }

  ngOnInit(): void {
    
  }
  help(isHelp: boolean){
   this.open = isHelp;
  }

}
