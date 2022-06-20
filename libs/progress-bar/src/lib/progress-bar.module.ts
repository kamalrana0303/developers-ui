import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './progress-bar/store/progress.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProgressEffect } from './progress-bar/store/progress.effect';

@NgModule({
  
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('progressState', reducer),
    EffectsModule.forFeature([ProgressEffect])
  ],
  exports: [
    
  ]
})
export class  ProgressBarModule {}
