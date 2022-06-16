import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderService } from '../../../../apps/dev/src/app/header.service';
import { BackButtonModule } from './back-button/back-button.module';
import { WhoCanSeeModule } from './who-can-see/who-can-see.module';

@NgModule({
  imports: [CommonModule, BackButtonModule, WhoCanSeeModule],
  providers: [],
  exports: [BackButtonModule, WhoCanSeeModule]
})
export class ModelsModule {}
