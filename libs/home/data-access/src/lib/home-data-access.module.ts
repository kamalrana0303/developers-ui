import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationModel } from '@developers/models';

@NgModule({
  imports: [CommonModule],
})
export class HomeDataAccessModule {
  public static forRoot(config:ConfigurationModel): ModuleWithProviders<HomeDataAccessModule>{
    return {
      ngModule: HomeDataAccessModule,
      providers: [{
        provide: 'config', useValue: config
      }]
    }
  }
}
