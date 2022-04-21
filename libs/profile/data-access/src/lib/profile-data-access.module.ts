import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProfiles from './+state/profiles.reducer';
import { ProfilesEffects } from './+state/profiles.effects';
import { ProfileConfiguration } from './configurations';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromProfiles.PROFILES_FEATURE_KEY,
      fromProfiles.reducer
    ),
    EffectsModule.forFeature([ProfilesEffects]),
    StoreModule.forFeature(
      fromProfiles.PROFILES_FEATURE_KEY,
      fromProfiles.reducer
    ),
  ],
})
export class ProfileDataAccessModule {
  public static forRoot(config:ProfileConfiguration): ModuleWithProviders<ProfileDataAccessModule>{
    return {
      ngModule: ProfileDataAccessModule,
      providers: [{
        provide: ProfileConfiguration, useValue: config
      }]
    }
  }
}
