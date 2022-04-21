import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DirectivesModule } from '@developers/directives';
import { FooterComponent } from './footer/footer.component';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MainComponent } from './main/main.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProfileDataAccessModule , ProfileConfiguration} from '@developers/profile/data-access';


const libConfigModule=[
  ProfileDataAccessModule.forRoot(environment as ProfileConfiguration)
]

const material: any[]=[
  MatToolbarModule,
  FlexLayoutModule,
  MatIconModule,
  MatDividerModule,
  A11yModule,
  OverlayModule,
  MatListModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DirectivesModule,
    libConfigModule,
    material,
    StoreDevtoolsModule.instrument({
      name: 'NgRx Authentication',
      logOnly: environment.production,
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  bootstrap: [AppComponent]
 
})
export class AppModule {}
