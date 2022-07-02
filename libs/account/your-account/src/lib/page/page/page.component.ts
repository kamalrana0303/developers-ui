import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { accountAction, accountSelector } from '@developers/account/data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'developers-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  account$= this.store.select(accountSelector.selectAccount);
  constructor(private store: Store, private router:Router) { }

  ngOnInit(): void {
    this.store.dispatch(accountAction.loadAccount())
  }
  personalInfo(){
    this.router.navigate(['auth','home'])
  }
  home(){
    this.router.navigate(['auth','home'])
  }

}
