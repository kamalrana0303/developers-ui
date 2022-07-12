import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialCasePipe } from './initial-case.pipe';
import { ScrollWindowDirective } from './scroll-window.directive';
import { ChangeBGCOnScrollDirective } from './change-bgcon-scroll.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    InitialCasePipe,
    ChangeBGCOnScrollDirective
   // ScrollWindowDirective
  ],
  exports:[InitialCasePipe, ChangeBGCOnScrollDirective] //ScrollWindowDirective]
})
export class DirectivesModule {}
