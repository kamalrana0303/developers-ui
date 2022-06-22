import { Overlay, OverlayPositionBuilder, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Subject, takeUntil, tap } from "rxjs";
import { ProgressConfig } from "../../../../progress-bar/src/lib/progress-bar/model/config";
import { ProgressState } from "../../../../progress-bar/src/lib/progress-bar/store/progress.reducer";
import { showProgress } from "../../../../progress-bar/src/lib/progress-bar/store/progress.selector";
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";

@Directive({
    selector: '[progressBarAware]'
  })
  export class ProgressBarDirective implements OnInit, OnDestroy {
    @Input('progressBarAware') config: ProgressConfig | any;
    unsubscribe$:Subject<any> = new Subject();
    private overlayRef: OverlayRef | any;
    constructor(private store: Store<ProgressState>, private overlay: Overlay, private positionBuilder: OverlayPositionBuilder) {}
  
    ngOnInit(): void { 
      this.store.pipe(select(showProgress({progressId: this.config.progressId}) )).pipe(takeUntil(this.unsubscribe$)).subscribe(show => {
        if (show) {
          this.config.onShow && this.config.onShow();
          this.overlayRef = this.overlay.create({
            hasBackdrop: true,
            positionStrategy: this.positionBuilder.global().centerHorizontally().centerVertically()
          })
          this.overlayRef.attach(new ComponentPortal(ProgressBarComponent))
        } else {
          this.config.onHide && this.config.onHide();
          if(this.overlayRef){
            this.overlayRef.detach();
          }
        }
        
        
      });
    }
  
    ngOnDestroy(): void {
     this.unsubscribe$.next(null);
      this.unsubscribe$.complete();
    }
  }