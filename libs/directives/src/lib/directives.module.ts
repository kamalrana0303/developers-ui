import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialCasePipe } from './initial-case.pipe';
import { ScrollWindowDirective } from './scroll-window.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    InitialCasePipe,
   // ScrollWindowDirective
  ],
  exports:[InitialCasePipe] //ScrollWindowDirective]
})
export class DirectivesModule {}
