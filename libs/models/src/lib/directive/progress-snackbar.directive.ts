import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { select, Store } from "@ngrx/store";
import { Subject, takeUntil, tap } from "rxjs";
import { ProgressConfig } from "../../../../progress-bar/src/lib/progress-bar/model/config";
import { ProgressState } from "../../../../progress-bar/src/lib/progress-bar/store/progress.reducer";
import { showProgress } from "../../../../progress-bar/src/lib/progress-bar/store/progress.selector";

@Directive({
    selector: '[progressSnackBar]'
  })
  export class ProgressSnackbarDirective implements OnInit, OnDestroy {
    @Input('progressSnackBar') config: ProgressConfig | any;
    unsubscribe$:Subject<any> = new Subject();
    constructor(private store: Store<ProgressState>, private matSanckBar: MatSnackBar) {}
  
    ngOnInit(): void {
  
     
      this.store.pipe(select(showProgress({progressId: this.config.progressId}) )).pipe(  takeUntil(this.unsubscribe$)).subscribe(show => {
        
        if (show) {
          this.config.onShow && this.config.onShow();
          this.matSanckBar.open("Updating...", "okay!!", {
            verticalPosition: 'bottom',
            horizontalPosition:"center"
        })
        } else {
          this.config.onHide && this.config.onHide();
          this.matSanckBar.dismiss();
        }
  
        
      });
    }
  
    ngOnDestroy(): void {
     this.unsubscribe$.next(null);
      this.unsubscribe$.complete();
    }
  }