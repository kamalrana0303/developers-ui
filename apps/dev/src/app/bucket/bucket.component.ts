import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { bucketAction } from '../data-access/action';

@Component({
  selector: 'developers-bucket',
  template: `
   
  `,
  styles: [
  ]
})
export class BucketComponent implements OnInit {
  
  constructor(private activatedRoute:ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    let code=this.activatedRoute.snapshot.queryParamMap.get("code");
    this.store.dispatch(bucketAction.loadToken({"value": code}))
  }

}
