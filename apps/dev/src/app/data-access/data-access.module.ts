import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import * as mainReducer from './reducer/index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreDevtoolsModule.instrument({
      name: 'NgRx Authentication',
      logOnly: environment.production,
    }),
    StoreModule.forRoot(mainReducer.reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ]
})
export class DataAccessModule { }
