import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'developers-who-can-see-your-info',
  templateUrl: './who-can-see-your-info.component.html',
  styleUrls: ['./who-can-see-your-info.component.scss']
})
export class WhoCanSeeYourInfoComponent implements OnInit {
  @Input()
  appName: string | any;
  constructor() { }

  ngOnInit(): void {
  }

}
