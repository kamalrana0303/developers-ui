import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PortalBridgeService } from '../../portal-bridge.service';
import { GoToLoginPageLinkComponent } from '../utils/go-to-login-page-link/go-to-login-page-link.component';
import { SignupPasswordLookComponent } from '../utils/look/signup-password-look/signup-password-look.component';
import { SignupRM } from '../utils/models/response/signup-rm';
import { SignupTitleComponent } from '../utils/signup-title/signup-title.component';

@Component({
  selector: 'developers-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit, OnDestroy {
  pending: boolean=false;
  titlePortalComponent: ComponentPortal<SignupTitleComponent> | any;
  actionButtonPortalComponent: ComponentPortal<GoToLoginPageLinkComponent> | any;
  passwordLookPortalComponent: ComponentPortal<SignupPasswordLookComponent> | any;

  constructor(private portalBridge:PortalBridgeService) { }

  ngOnInit(): void {
    this.titlePortalComponent= new ComponentPortal(SignupTitleComponent);
    this.actionButtonPortalComponent= new ComponentPortal(GoToLoginPageLinkComponent);
    this.passwordLookPortalComponent= new ComponentPortal(SignupPasswordLookComponent);
    this.portalBridge.setTitlePortal(this.titlePortalComponent)
    this.portalBridge.setActionButtonPortal(this.actionButtonPortalComponent);
  }

  ngOnDestroy(){
    this.titlePortalComponent.detach();
    this.actionButtonPortalComponent.detach();
  }

  submit(signupRM: SignupRM){

  }

  onPasswordFocussed(focussed:boolean){
    if(focussed){
      this.titlePortalComponent.detach();
      this.portalBridge.setTitlePortal(this.passwordLookPortalComponent)
    }
    else{
      this.passwordLookPortalComponent.detach();
      this.portalBridge.setTitlePortal(this.titlePortalComponent)
    }

  }

}
