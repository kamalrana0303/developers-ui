import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoCanSeeYourInfoComponent } from './who-can-see-your-info/who-can-see-your-info.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    WhoCanSeeYourInfoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    WhoCanSeeYourInfoComponent
  ]
})
export class WhoCanSeeModule { }
