import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthDataAccessModule } from '@developers/auth/data-access';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FlexLayoutModule} from '@angular/flex-layout'
const material=[
  MatCardModule,
  MatFormFieldModule, 
  FlexLayoutModule
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    material,
    RouterModule.forChild([
      {path:'', component: LoginPageComponent}
    ]),
    AuthDataAccessModule
  ],
  declarations: [ LoginPageComponent, LoginFormComponent]
})
export class AuthPageModule {}