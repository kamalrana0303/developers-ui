import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageModule } from './page/page.module';
import { ConfigurationModel } from '@developers/models';
import { DataAccessModule } from '@developers/account/data-access';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, 
    PageModule,DataAccessModule,
    RouterModule.forChild([
      {
        path:"", loadChildren: ()=> import("./page/page.module").then(m=> m.PageModule)
      }
    ])
  ],
  declarations: [],
})
export class YourAccountModule {
  public static forRoot(config:ConfigurationModel): ModuleWithProviders<YourAccountModule>{
    return {
      ngModule: YourAccountModule,
      providers: [{
        provide: 'config', useValue: config
      }]
    }
  }
}