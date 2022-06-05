import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as index from './+state/reducers/index';
import { CodesEffects } from './+state/codes.effects';
import { AuthConfigurations } from './auth.config';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("code_auth", index.reducers),
    EffectsModule.forFeature([CodesEffects]),
    
  ],

})
export class OauthDataAccessModule {
  public static forRoot(config:AuthConfigurations): ModuleWithProviders<OauthDataAccessModule>{
    return {
      ngModule: OauthDataAccessModule,
      providers: [{
        provide: AuthConfigurations, useValue: config
      }]
    }
  }
}
