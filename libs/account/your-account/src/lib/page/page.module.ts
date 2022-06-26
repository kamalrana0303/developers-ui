import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { ConfigurationModel } from '@developers/models';
import { DataAccessModule } from '@developers/account/data-access';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
   PageComponent
  ],
  imports: [
    CommonModule,
    DataAccessModule,
    PageRoutingModule
  ],
 
})
export class PageModule {
  public static forRoot(config:ConfigurationModel): ModuleWithProviders<PageModule>{
    
    return {
      ngModule: PageModule,
      providers: [{
        provide: 'config', useValue: config
      }]
    }
  }
 }
