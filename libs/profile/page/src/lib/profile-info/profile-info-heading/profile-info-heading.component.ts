import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'developers-profile-info-heading',
  templateUrl: './profile-info-heading.component.html',
  styleUrls: ['./profile-info-heading.component.scss']
})
export class ProfileInfoHeadingComponent implements OnInit {
  isMobileResolution:boolean=false;
  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth >720){
      this.isMobileResolution=false;
    }
    else{
      this.isMobileResolution =true;
    }
   
  }

}
