import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OauthDataAccessModule } from '@developers/oauth/data-access';
import { UserInfoComponent } from './user-info/user-info.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './user-info/auth.guard';
import {OAuthModule, OAuthService} from 'angular-oauth2-oidc';
import { TokenModule } from './token/token.module';
import { TokenComponent } from './token/token/token.component';
import { AuthConfigurations } from 'libs/oauth/data-access/src/lib/auth.config';
import { UserRegComponent } from './user-reg/user-reg.component';


@NgModule({
  imports: [
    CommonModule,
    
    RouterModule.forChild([
      {
        path: 'authorized',
        component: UserInfoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'token',
        component: TokenComponent
      },{
        path: 'reg',
        component: UserRegComponent,
        canActivate: [AuthGuard]
      }
    ]),
    OAuthModule.forRoot(),
    OauthDataAccessModule,
    TokenModule
   
  ],
  providers: [OAuthService],
  declarations: [UserInfoComponent, UserRegComponent],
})
export class OauthAuthCodeModule {
  public static forRoot(config:AuthConfigurations): ModuleWithProviders<OauthAuthCodeModule>{
    return {
      ngModule: OauthAuthCodeModule,
      providers: [{
        provide: AuthConfigurations, useValue: config
      }]
    }
  }
  
}
