import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import {OAuthService, AuthConfig} from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';
const oAuthConfig: AuthConfig={
  issuer: 'http://localhost:8080',
  strictDiscoveryDocumentValidation: false,
  requireHttps: false,
  redirectUri: window.location.origin,
  clientId: 'client',
  scope: 'openid',
}
@Component({
  selector: 'developers-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  store$= this.store.pipe(tap((x)=> {}));
  constructor(private store: Store) { }
  
  ngOnInit(): void {
    
    
  }

}
