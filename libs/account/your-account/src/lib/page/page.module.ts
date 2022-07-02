import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { ConfigurationModel } from '@developers/models';
import { PageComponent } from './page/page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { AccountDataAccessModule } from '@developers/account/data-access';


@NgModule({
  declarations: [
   PageComponent
  ],
  imports: [
    CommonModule,
    AccountDataAccessModule,
    PageRoutingModule,
    MatTabsModule,
    FlexLayoutModule,
    MatIconModule
  ],
})
export class YourAccountPage {
  public static forRoot(config:ConfigurationModel): ModuleWithProviders<YourAccountPage>{
    
    return {
      ngModule: YourAccountPage,
      providers: [{
        provide: 'config', useValue: config
      }]
    }
  }
 }
