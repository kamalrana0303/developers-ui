import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HighlightImage } from '../uv-feedback/highlight-img';

@Component({
  selector: 'uv-feedback-highlight-dialog',
  templateUrl: './uv-feedback-highlight-dialog.component.html',
  styleUrls: ['./uv-feedback-highlight-dialog.component.scss']
})
export class UvFeedbackHighlightDialogComponent implements OnInit {
  @Output()
  closed$:EventEmitter<void> = new EventEmitter<void>();
  imgUrl:any | null = null;
  highLight:HighlightImage | null= null;
  constructor(private matIconRegistry:MatIconRegistry, private domSanitizer:DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      `close`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/close.svg')
    )
    this.matIconRegistry.addSvgIcon(
      `highlight`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/higlight.svg")
    )
    this.matIconRegistry.addSvgIcon(
      `hide`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/hide.svg")
    )
    
  
   }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
   this.highLight = new HighlightImage();
   this.highLight.destroy();
   this.highLight.init();
  }

  close(){
    if(this.highLight != null){
      this.highLight.destroy();
    }
    this.closed$.emit()
  }

}
