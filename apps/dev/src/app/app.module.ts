import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DirectivesModule } from '@developers/directives';
import { FooterComponent } from './footer/footer.component';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';

import { environment } from '../environments/environment';
import { MainComponent } from './main/main.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataAccessModule } from './data-access/data-access.module';
import { BucketComponent } from './bucket/bucket.component';
import { ProfileDataAccessModule } from '@developers/profile/data-access';
import { AuthService } from './data-access/auth.service';
import { ProfilePageModule } from '@developers/profile/page';
import { HeaderService } from './header.service';
import { LogoutPromptComponent } from './logout-prompt/logout-prompt.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PortalModule } from '@angular/cdk/portal';
import { PortalBridgeService } from './data-access/portal-bridge.service';
import {MatProgressBarModule} from "@angular/material/progress-bar"
import { ProgressBarModule } from '@developers/progress-bar';
import { ModelsModule } from '@developers/models';
import {fromAccountPage} from '@developers/account/your-account';
import { AccountDataAccessModule } from '@developers/account/data-access';
import { HomeDataAccessModule } from '@developers/home/data-access';

const libConfigModule=[
  ProfilePageModule.forRoot(environment as any),
  ProfileDataAccessModule.forRoot(environment as any),
  fromAccountPage.YourAccountPage.forRoot(environment as any),
  AccountDataAccessModule.forRoot(environment as any),
  HomeDataAccessModule.forRoot(environment as any)
]



const material: any[]=[
  MatToolbarModule,
  FlexLayoutModule,
  MatIconModule,
  MatDividerModule,
  A11yModule,
  PortalModule,
  OverlayModule,
  MatListModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatProgressBarModule,
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    BucketComponent,
    LogoutPromptComponent,
    LoginComponent,
    LogoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DirectivesModule,
    DataAccessModule,
    ProgressBarModule,
    ModelsModule,
    OverlayModule,
    A11yModule,
    material,
    libConfigModule,
  ],
  
  bootstrap: [AppComponent],
  providers:[
    PortalBridgeService,
    { provide: 'authService', useFactory: getAuthServiceFactory, deps: [AuthService]},
    {
      provide: 'headerService', useFactory: headerFactory, deps: [HeaderService]
    }
  ]
 
})
export class AppModule {}

export function getAuthServiceFactory(authService: AuthService): AuthService{
  return authService;
}


export function headerFactory(headerService: HeaderService){
  return headerService
}
