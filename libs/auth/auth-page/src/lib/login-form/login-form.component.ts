import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Authenticate } from 'libs/auth/data-access/src/lib/authentication.model'; 
import { environment } from 'apps/dev/src/environments/environment';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Store } from '@ngrx/store';
import {selectToken} from '@developers/auth/data-access';

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
  username$=this.store.select(selectToken);
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

  constructor(private store: Store) { }

  ngOnInit(): void {
    

  }

  submit(){
    const value: Authenticate= this.loginForm.value
    if(this.loginForm.valid){
      this.submitted.emit(value);
    }
  }

}