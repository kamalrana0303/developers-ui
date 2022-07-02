import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { urlPrefix } from '@developers/models';
import { renameProfile, selectCpId, selectDisplayName, selectFirstName, selectLastName, selectNickName, selectProfile, selectProfileName } from '@developers/profile/data-access';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs';

@Component({
  selector: 'developers-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  continue = `${urlPrefix['1.0']}/${urlPrefix['2.0']}`
  routeTo:any
  queryParams= {}
  cpId$= this.store.pipe(select(selectCpId))
  cpId:string | any;
  displayName$= this.store.pipe(select(selectDisplayName)).pipe(map(displayName=> {
    return displayName?.trim().length == 0 ?null :displayName;
  }))
  nickName$= this.store.pipe(select(selectNickName)).pipe(map(nickName=> {
    return nickName?.trim().length == 0? null: nickName;
  }))
  name$= this.store.pipe(select(selectProfileName)).pipe(map(name=> {
     let derivedName = ""
     if(name?.firstName){
      derivedName += name.firstName
     }
     if(name?.lastName){
      derivedName = ( derivedName && derivedName.trim().length !=0 )? derivedName + " "+ name.lastName : name.lastName;
     }
     return derivedName.trim().length == 0 ? null : derivedName;
   }))
  
  
  constructor(private store: Store, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cpId$.subscribe(res=> this.cpId= res);
    this.routeTo=this.activatedRoute.snapshot.queryParamMap.get("continue");
  
  }


  
  name(){
    this.router.navigate([ `${urlPrefix['1.0']}`, `${urlPrefix['2.0']}`, `${urlPrefix['2.0.1']}`, `${urlPrefix['2.0.1.1']}`], {queryParams: {continue: this.continue}})
  }
  nickName(){  

  }
  displayName(){

  }
}
