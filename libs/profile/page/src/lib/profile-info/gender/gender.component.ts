import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationModel, GENDER, Profile } from '@developers/models';
import { selectProfileGender, updateGender } from '@developers/profile/data-access';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'developers-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {

  routeTo: string | any;
  queryParams= {};
  env:ConfigurationModel = this.config;
  gender: any = this.activateRouter.snapshot.data['profileName']?.gender
  profile: Profile | any =this.activateRouter.snapshot.data['profileName']
  submitting: boolean =false;
  constructor(private store: Store, private activateRouter:ActivatedRoute,private config: ConfigurationModel) { }

  ngOnInit(): void {

    this.routeTo =this.activateRouter.snapshot.queryParamMap.get("continue")
  }

  selectGender(event:any){
    this.gender = event.value;
    this.store.dispatch(updateGender({profileId: this.profile.cpId, gender: this.gender}))
  }

  onProgressShow(){
    this.submitting =true;
  }
  onProgressHide(){
    this.submitting =false;
  }

}
