import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Subject, takeUntil, tap } from "rxjs";
import { ProgressConfig } from "../../../../progress-bar/src/lib/progress-bar/model/config";
import { ProgressState } from "../../../../progress-bar/src/lib/progress-bar/store/progress.reducer";
import { showProgress } from "../../../../progress-bar/src/lib/progress-bar/store/progress.selector";

@Directive({
    selector: '[progressAware]'
  })
  export class ProgressDirective implements OnInit, OnDestroy {
    @Input('progressAware') config: ProgressConfig | any;
    unsubscribe$:Subject<any> = new Subject();
    constructor(private store: Store<ProgressState>, private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {}
  
    ngOnInit(): void {
  
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.store.pipe(select(showProgress({progressId: this.config.progressId}) )).pipe(  takeUntil(this.unsubscribe$)).subscribe(show => {
        
        if (show) {
          this.config.onShow && this.config.onShow();
        } else {
          this.config.onHide && this.config.onHide();
        }
  
        this.viewContainerRef.clear();      // clear all template inside this view container ref
  
        if (this.config.replace) {
          if (show) {
            this.viewContainerRef.createEmbeddedView(this.config.replaceWith);
          } else {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
          }
        } else {
          if (show) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
          }
        }
      });
    }
  
    ngOnDestroy(): void {
    // this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
  }