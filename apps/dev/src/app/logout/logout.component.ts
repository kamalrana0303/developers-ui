import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { accountSelector } from '@developers/account/data-access';
import { logoutAction } from '@developers/models';
import { selectProfile } from '@developers/profile/data-access';
import { select, Store } from '@ngrx/store';
import { filter, mapTo, merge, tap } from 'rxjs';

@Component({
  selector: 'developers-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  $profile=this.store.pipe(select(selectProfile));
  $account = this.store.pipe(select(accountSelector.selectAccount))
  @ViewChild(MatButton, {read: ElementRef, static:true})
  private buttonEl: ElementRef | any;
  @ViewChild(CdkConnectedOverlay, {static: true})
  private connectedOverlay: CdkConnectedOverlay | any;

  isPanelVisible$: any;
  isPanelHidden$:any;
  $showPanel:any;

  constructor(private store: Store, private fM: FocusMonitor) { 
    
  }

  ngOnInit(): void {
    this.isPanelVisible$ = this.fM.monitor(this.buttonEl).pipe(
      filter(focussed => !!focussed),
      mapTo(true)
    )  ;
    this.isPanelHidden$ = this.connectedOverlay.backdropClick.pipe(mapTo(false));
    this.$showPanel= merge(this.isPanelHidden$, this.isPanelVisible$);
  }

  attemptToLogout(){
    this.store.dispatch(logoutAction.loggedOut())
  }

}
