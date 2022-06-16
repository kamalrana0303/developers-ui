import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button/back-button.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    BackButtonComponent,
  
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports:[
    BackButtonComponent,
  ]
})
export class BackButtonModule { }
