import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardMdImage, MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ProfileInfoHeadingComponent } from './profile-info-heading/profile-info-heading.component';
import { RouterModule } from '@angular/router';
import { NameComponent } from './name/name.component';
import { UserControlComponent } from './form-control/user-control/user-control.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NameEditComponent } from './name-edit/name-edit.component';
import {ModelsModule} from '@developers/models';
import { NameEditResolver } from './guard/name-edit.resolver';
import { ProfilePageService } from '../profile-page/profile-page.service';


@NgModule({
  declarations: [
    ProfileInfoComponent,
    ProfileInfoHeadingComponent,
    NameComponent,
    UserControlComponent,
    NameEditComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    ModelsModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: ProfileInfoComponent, pathMatch: 'full'
      },
      {
        path: 'name', component: NameComponent
      },
      {
        path: 'name/edit', component: NameEditComponent, resolve: {profileName: NameEditResolver}
      }
    ])
  ],
  providers:[NameEditResolver],
  exports: [ProfileInfoComponent]
})
export class ProfileInfoModule { }
