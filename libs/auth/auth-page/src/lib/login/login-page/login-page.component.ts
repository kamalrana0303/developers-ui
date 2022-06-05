import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import {Authenticate, login, State, } from '@developers/auth/data-access'
import { ComponentPortal } from '@angular/cdk/portal';
import { PortalBridgeService } from '../../portal-bridge.service';
import { LoginTitleComponent } from '../utils/login-title/login-title.component';
import { LoginActionButtonComponent } from '../utils/login-action-button/login-action-button.component';


@Component({
  selector: 'developers-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],

})
export class LoginPageComponent implements OnInit {

  titleCPortal: ComponentPortal<LoginTitleComponent> | any;

  actionButtonCPortal: ComponentPortal<LoginActionButtonComponent> | any
  
  pending$ = null;//this.store.pipe(select(selectPending));
  
  constructor(private store: Store<{auth: State}>, private portalBridgeService: PortalBridgeService, private cdr:  ChangeDetectorRef) { }

  ngOnInit(): void {
    this.titleCPortal= new ComponentPortal(LoginTitleComponent);
    this.actionButtonCPortal= new ComponentPortal(LoginActionButtonComponent);
  }

  ngAfterViewInit(){
    this.portalBridgeService.setTitlePortal(this.titleCPortal);
    this.portalBridgeService.setActionButtonPortal(this.actionButtonCPortal);
    this.cdr.detectChanges();
  }

  onLogin(credentials: Authenticate){
   this.store.dispatch(login({authenticate: credentials}))
  }

  ngOnDestroy(){
    this.titleCPortal.detach();
    this.actionButtonCPortal.detach();
  }

}
