import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Authenticate } from 'libs/auth/data-access/src/lib/authentication.model'; 
import { environment } from 'apps/dev/src/environments/environment';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Store } from '@ngrx/store';
import { loginFailure, selectToken, State } from '@developers/auth/data-access';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { tap } from 'rxjs';
import { CdkConnectedOverlay, ConnectedPosition } from '@angular/cdk/overlay';


@Component({
  selector: 'developers-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: environment.appearance, floatLabel: environment.floatLabel}}
  ]
})
export class LoginFormComponent implements OnInit {

  appearance= environment.appearance;
  @Input() error: string | null=null;
  @Input() set disabled(isDisabled: boolean){
    if(isDisabled){
      this.loginForm.disable();
    }
    else{
      this.loginForm.enable();
    }
  }
  @Output() submitted= new EventEmitter<Authenticate>();
  loginForm= new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new  FormControl('', [Validators.required])
  });

  
  constructor(private store: Store<State>, private domSanitizer: DomSanitizer, private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.addSvgIcon(
      "bird",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/birds.svg")
    )
   }

  ngOnInit(): void {
    
    
  }

  submit(){
    const value: Authenticate= this.loginForm.value
    if(this.loginForm.valid){
      this.submitted.emit(value);
    }
    else{
      let error:string=""
      if(this.loginForm.hasError('required', ['username'])){
        error+="username is required"
      }
      if(this.loginForm.hasError('required', ['password'])){
        if(error.length!=0){
          error+=","
        }
        error+="password is required."
      }

      this.store.dispatch(loginFailure({error:error}))
     
    }
  }

}