import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProfiles from './+state/reducers/index';
import { ProfilesEffects } from './+state/profiles.effects';
import { ConfigurationModel } from '@developers/models';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromProfiles.FEATURE_PROFILE,
      fromProfiles.reducers
    ),
    EffectsModule.forFeature([ProfilesEffects])
  ],
  providers: [CookieService]
})
export class ProfileDataAccessModule {
  public static forRoot(config:ConfigurationModel): ModuleWithProviders<ProfileDataAccessModule>{
    return {
      ngModule: ProfileDataAccessModule,
      providers: [{
        provide: 'config', useValue: config
      }]
    }
  }
}
