import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    DividerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDividerModule
  ],
  exports:[DividerComponent]
})
export class DividerModule { }
