import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageModule } from './page/page.module';
import { DataAccessModule } from './data-access/data-access.module';

@NgModule({
  imports: [CommonModule, PageModule, DataAccessModule],
})
export class YourAddressModule {}
