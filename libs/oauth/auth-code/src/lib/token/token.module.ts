import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenComponent } from './token/token.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    TokenComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    TokenComponent
  ]
})
export class TokenModule { }
