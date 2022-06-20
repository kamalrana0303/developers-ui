import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationModel, Name, NameRM, Profile } from '@developers/models';
import { renameProfile, selectCpId, selectProfileName } from '@developers/profile/data-access';
import { select, Store } from '@ngrx/store';
import { ProgressDirective } from 'libs/models/src/lib/directive/progress.directive';
import { config, Subscription, switchMap, tap } from 'rxjs';

@Component({
  selector: 'developers-name-edit',
  templateUrl: './name-edit.component.html',
  styleUrls: ['./name-edit.component.scss']
})
export class NameEditComponent implements OnInit {
  submitting:boolean =false;
  routeTo: string | any;
  queryParams = {}
  name: FormGroup |any;
  appName:any = this.config.appName;
 
  constructor(private store: Store, private fb:FormBuilder, private activated: ActivatedRoute,  @Inject('config') private config: ConfigurationModel) { 
}
  
  ngOnInit(): void {
    let profile:Profile = this.activated.snapshot.data['profileName']
    this.name= this.fb.group({
      "firstName": [profile?.name?.firstName,Validators.compose([Validators.required])],
      "lastName": [profile?.name?.lastName]
    })
    this.routeTo=this.activated.snapshot.queryParamMap.get("continue");
  }

  onProgressShow() {
    this.submitting = true;
  }

  onProgressHide() {
    this.submitting = false;
  }

  cancel(){
    

  }

  rename(){

    if((this.name as FormGroup).valid){
      this.store.dispatch(renameProfile({
        cpId: (this.activated.snapshot.data['profileName'] as Profile)?.cpId,
        firstName: this.name.value.firstName, 
        lastName: this.name.value.lastName
      }))
    }   
  }
  ngOnDestroy(){

  }
}
