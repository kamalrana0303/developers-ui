import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'developers-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  array:any[]= Array(30).fill(0)
  constructor() { }

  ngOnInit(): void {
  }
  
}
