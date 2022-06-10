import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileDataAccessModule } from '@developers/profile/data-access';
import { ProfilePageComponent } from './profile-page.component';
import { ConfigurationModel } from '@developers/models';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileInfoModule } from '../profile-info/profile-info.module';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    ProfileInfoModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ProfilePageComponent} 
    ]),
    ProfileDataAccessModule
  ],
  declarations: [
    ProfilePageComponent
  ],
})
export class ProfilePageModule {
  public static forRoot(config:ConfigurationModel): ModuleWithProviders<ProfileDataAccessModule>{
    return {
      ngModule: ProfileDataAccessModule,
      providers: [{
        provide: ConfigurationModel, useValue: config
      }]
    }
  }
}
