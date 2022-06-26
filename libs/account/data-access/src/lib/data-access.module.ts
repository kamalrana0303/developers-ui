import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffect } from './store/account.effect';
import { ConfigurationModel } from '@developers/models';
import { AccountService } from './store/account.service';
import { FEATURE_ACCOUNT, reducers } from './store/account.selector';

@NgModule({
  imports: [CommonModule,
  StoreModule.forFeature(FEATURE_ACCOUNT, reducers),
  EffectsModule.forFeature([AccountEffect])
  ],
  providers: [AccountService],
})
export class DataAccessModule {
  public static forRoot(config:ConfigurationModel): ModuleWithProviders<DataAccessModule>{
    return {
      ngModule: DataAccessModule,
      providers: [{
        provide: 'config', useValue: config
      }]
    }
  }
}
