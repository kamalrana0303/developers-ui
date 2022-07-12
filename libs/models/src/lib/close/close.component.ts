import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class CloseComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer:DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "close",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/close.svg")
    );
   }

  ngOnInit(): void {
   
  }

}
