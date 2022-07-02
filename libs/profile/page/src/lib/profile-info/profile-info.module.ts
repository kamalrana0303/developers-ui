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
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NameEditComponent } from './name-edit/name-edit.component';
import {ModelsModule} from '@developers/models';
import { ProfileResolver } from './guard/profile.resolver';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { MatProgressBarModule } from "@angular/material/progress-bar";

import {MatSelectModule} from '@angular/material/select'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateModule} from '@angular/material-moment-adapter';
import {MatRadioModule} from "@angular/material/radio"
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {  Moment} from 'moment';
import { GenderComponent } from './gender/gender.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DobComponent } from '../dob/dob.component';
import { NicknameEditComponent } from './nickname-edit/nickname-edit.component';

// tslint:disable-next-line:no-duplicate-imports


// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@NgModule({
  declarations: [
    ProfileInfoComponent,
    ProfileInfoHeadingComponent,
    NameComponent,
    UserControlComponent,
    NameEditComponent,
    DobComponent,
    GenderComponent,
    NicknameEditComponent
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
    OverlayModule,
    A11yModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MomentDateModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
  
    RouterModule.forChild([
      {
        path: '', component: ProfileInfoComponent, pathMatch: 'full'
      },
      {
        path: 'name', component: NameComponent
      },
      {
        path: 'name/edit', component: NameEditComponent, resolve: {profileName: ProfileResolver}
      },
      {
        path: 'birthday', component: DobComponent, resolve: {profileName: ProfileResolver}
      },
      {
        path: 'gender', component: GenderComponent, resolve: {profileName: ProfileResolver}

      }

    ])
  ],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ProfileResolver
  ],

})
export class ProfileInfoModule { }
