import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutPromptComponent } from './logout-prompt/logout-prompt.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {AuthEffects, AuthConfigurations} from "@developers/auth/data-access"
import * as Auth from './+state/reducer/index';
import { AuthenticationService } from './authentication.service';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    
    StoreModule.forFeature(Auth.AUTH_FEATURE, Auth.reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations:[
    LogoutPromptComponent
  ],
  providers:[
    AuthenticationService
  ]
})
export class AuthDataAccessModule {
  public static forRoot(config:AuthConfigurations): ModuleWithProviders<AuthDataAccessModule>{
    return {
      ngModule: AuthDataAccessModule,
      providers: [{
        provide: AuthConfigurations, useValue: config
      }]
    }
  }
}