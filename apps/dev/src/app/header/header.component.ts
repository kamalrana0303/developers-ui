import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { loginAction } from '@developers/models';
import { selectLoggedInStatus } from '../data-access/reducer';
import { delay, map, tap } from 'rxjs';
import { PortalBridgeService } from '../data-access/portal-bridge.service';
import { LogoutComponent } from '../logout/logout.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'developers-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isOpen:boolean=true;
  logout:ComponentPortal<LogoutComponent>| any;
  login: ComponentPortal<LoginComponent> | any;
  portal$= this.portalBridgeService.portal$
  isLoggedIn:boolean =false;
  $isLoggedIn: any=this.store.pipe(select(selectLoggedInStatus)).pipe(tap((isLoggedIn)=> {
    
    this.isLoggedIn = isLoggedIn;
   
    if(this.isLoggedIn){
      this.login?.detach()
      this.logout=new ComponentPortal(LogoutComponent);
      this.portalBridgeService.setPortal(this.logout)
      this.cdr.detectChanges();
      
    }
    else{
      this.logout?.detach()
      this.login= new ComponentPortal(LoginComponent);
      this.portalBridgeService.setPortal(this.login);
      this.cdr.detectChanges();
    }
  }));
  
  
  constructor(private store: Store, private router: Router, private portalBridgeService: PortalBridgeService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.$isLoggedIn.subscribe()
    this.store.dispatch(loginAction.checkToken())
  }
  routeToLogin(){
    this.router.navigate(['/auth']);
  }
  ngAfterViewInit(){
    if(this.isLoggedIn){
      this.login?.detach()
      this.logout=new ComponentPortal(LogoutComponent);
      this.portalBridgeService.setPortal(this.logout)
      this.cdr.detectChanges();
      
    }
    else{
      this.logout?.detach()
      this.login= new ComponentPortal(LoginComponent);
      this.portalBridgeService.setPortal(this.login);
      this.cdr.detectChanges();
    }
  }

  onClick() {
    // const params = [
    //     'response_type=code',
    //     'client_id='+ environment.clientId,
    //     'scope='+environment.scope,
    //     encodeURIComponent('redirect_uri=http://localhost:4200/login'),
    // ];
   // window.location.href = 'http://localhost:8080/oauth/authorize?' + params.join('&');

  }
  ngOnDestroy(){
   this.login?.detach();
   this.logout?.detach();
  }

}
