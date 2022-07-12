import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HighlightImage } from '../uv-feedback/highlight-img';
import { ImageEditor } from '../uv-feedback/screen-editor';

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
    this.highLight.init();
  }

  close(){
    this.closed$.emit()
  }

}
