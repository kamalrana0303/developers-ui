import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { accountAction, accountSelector } from '@developers/account/data-access';
import { Store } from '@ngrx/store';
import { changeSelectedTabIndex } from 'libs/account/data-access/src/lib/store/account.action';
export enum TAB{
  HOME,
  PERSONAL_INFO
}
@Component({
  selector: 'developers-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  _selectedTabIndex: number = 1;

  account$= this.store.select(accountSelector.selectAccount);
  constructor(private store: Store, private router:Router, private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.store.select(accountSelector.selectSelectedTabIndex).subscribe(x=> {
      this._selectedTabIndex=x
      this.handleCaseFn();
    })
   
    this.store.dispatch(accountAction.loadAccount())
  }

  onChange(event: MatTabChangeEvent){
    this.handleCaseFn();
  }

  handleCaseFn(){
    switch (this._selectedTabIndex){
      case TAB.HOME:
        this.router.navigate(['account'])
        this._selectedTabIndex =0;
        break;
      case TAB.PERSONAL_INFO:
        this.router.navigate(['account','personal-info'])
        this.cdr.detectChanges();
        this._selectedTabIndex =1;
        break;
      default:
        break;
    }
  }

  get selectedTabIndex():number{
    return this._selectedTabIndex;
  }

  set selectedTabIndex(i:number){
    this._selectedTabIndex = i;
    this.store.dispatch(changeSelectedTabIndex({selectedTabIndex: this._selectedTabIndex}))
  }
}
