import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationModel } from '@developers/models';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffect } from './store/home.effect';
import { StoreModule } from '@ngrx/store';
import { FEATURE_HOME, reducers } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      FEATURE_HOME,
      reducers
    ),
    EffectsModule.forFeature([HomeEffect])
  ],
})
export class HomeDataAccessModule {
  public static forRoot(config:ConfigurationModel): ModuleWithProviders<HomeDataAccessModule>{
    return {
      ngModule: HomeDataAccessModule,
      providers: [{
        provide: 'config', useValue: config
      }]
    }
  }
}
