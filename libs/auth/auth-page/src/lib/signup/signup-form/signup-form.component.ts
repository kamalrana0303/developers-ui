import { ComponentPortal } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnInit, Optional, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { environment } from 'apps/dev/src/environments/environment';
import { SignupPasswordLookComponent } from '../utils/look/signup-password-look/signup-password-look.component';
import { SignupRM } from '../utils/models/response/signup-rm';



@Component({
  selector: 'developers-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: environment.appearance, floatLabel: environment.floatLabel}}
  ]
})
export class SignupFormComponent implements OnInit {
  error={
    password: ['password is required'],
    otp: ['otp is required'],
    username: ['username is required'],
    confirm_password: ['please confirm your password', 'password doesn\'t match']
  }
  signupRM: SignupRM= {
    otp:'',
    password:'',
    username:''
  }
  form: FormGroup | any= this.fb.group({
    username: [this.signupRM.username, Validators.compose([Validators.required])],
    otp: [this.signupRM.otp, Validators.compose([Validators.required])],
    password_pair: new FormGroup({
      password: new FormControl(this.signupRM.password, Validators.compose([Validators.required])),
      confirm_password: new FormControl(null, Validators.compose([Validators.required]))
    }, {
      validators: confirmedValidator('password', 'confirm_password')
    })
  });

  visibility:boolean=false; 

  @Output()
  passwordFocussed: EventEmitter<boolean> | any= new EventEmitter<boolean>();
 
  @Output()
  submitted:EventEmitter<SignupRM> | any=new EventEmitter<SignupRM>();

  @Input()
  set disabled(isDisabled: boolean){
    if(isDisabled){
      this.form.disable()
    }
    else{
      this.form.enable();
    }
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
     
  }

  get pF():FormGroup{
    return this.form as FormGroup;
  }

  get cF():FormGroup{
    return this.form.controls['password_pair'] as FormGroup
  }

  submit(){
    if(this.form.valid){

      this.submitted.emit(this.signupRM);
    }
  }

  onPasswordFocussed(){
     this.passwordFocussed.emit(true);
  }

  onPasswordBlurred(){
    this.passwordFocussed.emit(false);
  }

}

export function confirmedValidator(controlName: string, matchingControlName: string): any{
  return (formGroup: FormGroup) => {
    const control= formGroup.controls[controlName];
    const matchingControl= formGroup.controls[matchingControlName];
    if(matchingControl.errors && !matchingControl.errors['confirmedValidator']){
      return ;
    }
    if(control.value !== matchingControl.value){
      matchingControl.setErrors({confirmedValidator: true})
    }
    else{
      matchingControl.setErrors(null);
    }
  }
}
