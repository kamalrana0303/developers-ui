import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackButtonModule } from './back-button/back-button.module';
import { WhoCanSeeModule } from './who-can-see/who-can-see.module';
import { ProgressDirective } from './directive/progress.directive';


@NgModule({
  declarations: [ProgressDirective],
  imports: [CommonModule, BackButtonModule, WhoCanSeeModule,],
  providers: [],
  exports: [BackButtonModule, WhoCanSeeModule , ProgressDirective]
})
export class ModelsModule {}
