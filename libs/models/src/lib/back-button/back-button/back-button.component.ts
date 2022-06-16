import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'developers-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {
  @Input()
  title: string | any;
  @Input()
  routeTo: string[] = [];
  @Input()
  queryParams: any= {};
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToPreviousPage(){
    this.router.navigate(this.routeTo, this.queryParams)
  }

}
