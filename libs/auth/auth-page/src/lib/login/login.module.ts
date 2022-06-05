import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { PortalModule } from '@angular/cdk/portal';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginTitleComponent } from './utils/login-title/login-title.component';
import { LoginActionButtonComponent } from './utils/login-action-button/login-action-button.component';
import { DividerModule } from '../utils/divider/divider.module';
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
  ReactiveFormsModule
]


@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent, LoginTitleComponent, LoginActionButtonComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    DividerModule,
    material
  ]
})
export class LoginModule { }
