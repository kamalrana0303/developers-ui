import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardMdImage, MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ProfileInfoHeadingComponent } from './profile-info-heading/profile-info-heading.component';



@NgModule({
  declarations: [
    ProfileInfoComponent,
    ProfileInfoHeadingComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [ProfileInfoComponent]
})
export class ProfileInfoModule { }
