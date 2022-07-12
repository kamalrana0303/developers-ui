import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ComponentRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UvFeedbackComponent } from '../uv-feedback/uv-feedback.component';

@Component({
  selector: 'developers-help-menu',
  templateUrl: './help-menu.component.html',
  styleUrls: ['./help-menu.component.scss']
})
export class HelpMenuComponent implements OnInit {
  uvFeedBackComponentRef:ComponentRef<UvFeedbackComponent> | null = null;
  constructor(private router:Router, private overlay: Overlay, private position:OverlayPositionBuilder) { }

  ngOnInit(): void {
  }

  support(){
    const overlayRef=this.overlay.create({
      hasBackdrop:true,
      positionStrategy: this.position.global().right().top(),
      height:  '100%'
    })
    const dialogPortal = new ComponentPortal(UvFeedbackComponent);
    this.uvFeedBackComponentRef = overlayRef.attach(dialogPortal);
    overlayRef.backdropClick().subscribe(click => overlayRef.detach())
    this.uvFeedBackComponentRef.instance.closed$.subscribe(x=> overlayRef.detach())
  }

}
