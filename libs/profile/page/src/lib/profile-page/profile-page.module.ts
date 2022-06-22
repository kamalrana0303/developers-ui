import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDataAccessModule } from '@developers/profile/data-access';
import { ConfigurationModel } from '@developers/models';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileInfoModule } from '../profile-info/profile-info.module';
import { ProfilePageService } from './profile-page.service';
const routes: Routes= [
  {path: '', loadChildren : () => import('../profile-info/profile-info.module').then(m => m.ProfileInfoModule)} 
]
@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    ProfileInfoModule,
    
    RouterModule.forChild(routes),
    ProfileDataAccessModule
  ],
  
  declarations: [
  ],
  providers:[
    ProfilePageService
  ]
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
