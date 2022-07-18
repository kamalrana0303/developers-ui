import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { Component, ComponentRef, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { ScreenShotService } from '../screenshot.service';
import { UvFeedbackHighlightDialogComponent } from '../uv-feedback-highlight-dialog/uv-feedback-highlight-dialog.component';
import { ScreenShot, startCapture } from './screenshot';

@Component({
  selector: 'developers-uv-feedback',
  templateUrl: './uv-feedback.component.html',
  styleUrls: ['./uv-feedback.component.scss']
})
export class UvFeedbackComponent implements OnInit {
  @Output()
  closed$:EventEmitter<void> = new EventEmitter<void>();
  uvFeedbackHighlightDialogComponentRef: ComponentRef<UvFeedbackHighlightDialogComponent> | null = null;
  fg:FormGroup | any = null;
  @ViewChild('uvFeedbackRoot', {static:true})
  root:ElementRef | any ;
  ssSelected:boolean =false;
  ss:any = null;
  constructor(private fb:FormBuilder,
    private store: Store,
    private domSanitizer:DomSanitizer,
    private matIconRegistry: MatIconRegistry, 
    @Inject(DOCUMENT)private doument:Document, 
    private screenShot: ScreenShotService, 
    private overlay:Overlay,
    private positionBuilder:OverlayPositionBuilder) { }

  ngOnInit(): void {
    this.matIconRegistry.addSvgIcon(
      `uvdelete`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/delete.svg")
    )
    this.fg= this.fb.group({
      "description": [, Validators.required]
    })
  }

  close(){
    this.closed$.emit();
  }

  startCaptureSS(){
    const cdk = document.getElementsByClassName('cdk-overlay-container');
    for(let i=0; i< cdk.length; i++){
      (cdk[i] as any).style.visibility = 'hidden'
    }
    ScreenShot.capture().then(isSelected => {
      this.ssSelected = isSelected
      for(let i=0; i< cdk.length; i++){
        (cdk[i] as any).style.visibility = 'visible'
      }
    });
  }

  // stopCaptureSS(){
  //   this.stopCapture()
  // }

  // stopCapture(){
  //   let tracks = this.videoElement.srcObject.getTracks();
  //   tracks.forEach((track:any)=>track?.stop())
  //   this.videoElement.srcObject = null;
    
  // }

  delete(){
    document.getElementById("uv-screenshot")?.remove();
    this.ssSelected =false;
  }

  async highLightOrHideInfo(){
    const blob = await fetch(ScreenShot.imgUrl).then(r=>r.blob())
    const dataUrl:string = await new Promise(r=> {let a = new FileReader(); a.onload = r; a.readAsDataURL(blob)}).then((e:any)=>e.target.result)
   
    const overlayRef = this.overlay.create({
      hasBackdrop:true,
      positionStrategy: this.positionBuilder.global().centerVertically().centerHorizontally(),
      height: '95%',
      width: '90%'
    })

    const dialogPortal = new ComponentPortal(UvFeedbackHighlightDialogComponent);
    (this.root as ElementRef).nativeElement.style.visibility = 'hidden'
    this.uvFeedbackHighlightDialogComponentRef = overlayRef.attach(dialogPortal);    
    this.uvFeedbackHighlightDialogComponentRef.instance.imgUrl = this.domSanitizer.bypassSecurityTrustUrl( dataUrl );
    this.uvFeedbackHighlightDialogComponentRef.instance.closed$.subscribe(close=>{
      overlayRef.detach();
      (this.root as ElementRef).nativeElement.style.visibility = 'visible'
    })
  }

  async file(url:any){
     const res = await fetch(url)
      const buff = await res.arrayBuffer();
      const file = [
        new File([buff],`photo_${new Date()}.jpg`, {
          type: 'image/jpeg'
        } )
      ];  
      return file;  
  }
  
}


