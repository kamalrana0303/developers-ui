import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupTitleComponent } from './utils/signup-title/signup-title.component';
import { SignupActionButtonComponent } from './utils/signup-action-button/signup-action-button.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { PortalModule } from '@angular/cdk/portal';
import { ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from '../utils/divider/divider.module';
import { GoToLoginPageLinkComponent } from './utils/go-to-login-page-link/go-to-login-page-link.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SignupPasswordLookComponent } from './utils/look/signup-password-look/signup-password-look.component';
const material=[
  MatCardModule,
  MatFormFieldModule, 
  FlexLayoutModule, 
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  PortalModule,
  MatTabsModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [SignupFormComponent, SignupPageComponent, SignupTitleComponent, SignupActionButtonComponent, GoToLoginPageLinkComponent, SignupPasswordLookComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    DividerModule,
    material
  ]
})
export class SignupModule { }
