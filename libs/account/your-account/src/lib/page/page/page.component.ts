import { Component, OnInit } from '@angular/core';
import { accountSelector } from '@developers/account/data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'developers-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  account$= this.store.select(accountSelector.selectAccount);
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
