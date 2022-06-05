import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AuthDataAccessModule } from '@developers/auth/data-access';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import {MatTabsModule} from '@angular/material/tabs';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { PortalBridgeService } from './portal-bridge.service';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { DividerModule } from './utils/divider/divider.module';
import { AuthPageConfigurations } from './auth-page.config';

const material=[
  MatCardModule,
  MatFormFieldModule, 
  FlexLayoutModule, 
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  A11yModule,
  OverlayModule,
  PortalModule,
  MatTabsModule
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    material,
    RouterModule.forChild([
      {
        path:"", component: AuthPageComponent, children: [
          {path:'login', loadChildren: ()=>import("./login/login.module").then(m=> m.LoginModule)},
          {path:'sign-up', loadChildren: ()=> import("./signup/signup.module").then(m=> m.SignupModule)}
        ]
      }
    ]),
    AuthDataAccessModule,
    DividerModule
  ],
  declarations: [ AuthPageComponent],
  providers: [PortalBridgeService]
})
export class AuthPageModule {
  public static forRoot(config:AuthPageConfigurations): ModuleWithProviders<AuthPageModule>{
    return {
      ngModule: AuthDataAccessModule,
      providers: [{
        provide: AuthPageConfigurations, useValue: config
      }]
    }
  }
}