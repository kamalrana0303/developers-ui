import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackButtonModule } from './back-button/back-button.module';
import { WhoCanSeeModule } from './who-can-see/who-can-see.module';
import { ProgressDirective } from './directive/progress.directive';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { ProgressBarDirective } from './directive/progress-bar.directive';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProgressSnackbarDirective } from './directive/progress-snackbar.directive';
import { CloseComponent } from './close/close.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [ 
    SpinnerComponent, 
    ProgressBarComponent, 
    ProgressDirective, 
    ProgressBarDirective, 
    ProgressSnackbarDirective, CloseComponent
    
  ],
  imports: [
    CommonModule,
    BackButtonModule, 
    WhoCanSeeModule, 
    A11yModule, 
    OverlayModule, 
    MatProgressBarModule, 
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  exports: [
    BackButtonModule, 
    WhoCanSeeModule ,  
    SpinnerComponent,
    ProgressDirective, 
    ProgressBarDirective, 
    ProgressSnackbarDirective,
    CloseComponent
  ]
})
export class ModelsModule {}
