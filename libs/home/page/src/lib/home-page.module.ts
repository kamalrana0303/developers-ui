import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDataAccessModule } from '@developers/home/data-access';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { IntroComponent } from './intro/intro.component';
import {DirectivesModule  } from '@developers/directives';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LookingForSomethingElseComponent } from './looking-for-something-else/looking-for-something-else.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { HelpWizComponent } from './help-wiz/help-wiz.component';
import { ModelsModule } from '@developers/models';
import { HelpMenuComponent } from './help-menu/help-menu.component';
import { UvFeedbackComponent } from './uv-feedback/uv-feedback.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxCaptureModule } from 'ngx-capture';
import { UvFeedbackHighlightDialogComponent } from './uv-feedback-highlight-dialog/uv-feedback-highlight-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip'
export const routes:Routes=[
  {
    path: "", component: IntroComponent, pathMatch: "full"
  }
]
export const materials=[
 
]
@NgModule({
  imports: [
    CommonModule,
    HomeDataAccessModule,
    DirectivesModule,
    ModelsModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxCaptureModule,
    MatTooltipModule,
    RouterModule.forChild(routes),
    
  ],
  declarations: [
    HomePageComponent,
    IntroComponent,
    LookingForSomethingElseComponent,
    HelpWizComponent,
    HelpMenuComponent,
    UvFeedbackComponent,
    UvFeedbackHighlightDialogComponent
  ],
})
export class HomePageModule {

}
