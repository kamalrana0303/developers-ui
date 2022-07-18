import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HighlightImage } from '../uv-feedback/highlight-img';

@Component({
  selector: 'uv-feedback-highlight-dialog',
  templateUrl: './uv-feedback-highlight-dialog.component.html',
  styleUrls: ['./uv-feedback-highlight-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UvFeedbackHighlightDialogComponent implements OnInit {
  @Output()
  closed$:EventEmitter<void> = new EventEmitter<void>();
  @ViewChild("highlightButton",{static: true}) highlightButton :MatButton | any;
  @ViewChild("hideButton", {static: true}) hideButton: MatButton | any;
  @ViewChild("cancelButton",{static:true}) cancelButton: MatButton | any;
  @ViewChild("doneButton",{static:true}) doneButton: MatButton | any;
  imgUrl:any | null = null;
  highLight:HighlightImage | null= null;
  shape: any[] = []
  isHighlight:boolean =true;
  isHide:boolean =false;
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
    if(this.highLight == null || this.highLight == undefined){
      this.highLight = new HighlightImage({shape: this.shape, imgUrl: this.imgUrl});
      this.highLight.init()
    }
  }


  close(){
    if(this.highLight != null){
     // HighlightImage.destroy();
    }
    this.closed$.emit()
  }
  updateImage(){
    if(this.highLight != undefined && this.highLight != null){
      this.shape = this.highLight.updateImage()
    }
    this.close()
  }
  highlightImage(){
    if(this.highLight != null ){
      this.highLight.fillColor = 'rgba(0, 0, 255, 0.122)' ;
      this.highLight.strokeStyle = '#e49b38';
    }    
    
  }
  hideImage(){
    if(this.highLight != null ){
      this.highLight.fillColor = '#000';
      this.highLight.strokeStyle = "#000";
    }
    
  }

}
