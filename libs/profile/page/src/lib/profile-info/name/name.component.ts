import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { renameProfile, selectCpId, selectFirstName, selectLastName, selectProfile, selectProfileName } from '@developers/profile/data-access';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs';

@Component({
  selector: 'developers-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  routeTo:any
  queryParams= {}
  cpId$= this.store.pipe(select(selectCpId))
  cpId:string | any;
  
  name$= this.store.pipe(select(selectProfileName)).pipe(map(name=> {
     let derivedName = ""
     if(name?.firstName){
      derivedName += name.firstName
     }
     if(name?.lastName){
      derivedName = ( derivedName && derivedName.trim().length !=0 )? derivedName + " "+ name.lastName : name.lastName;
     }

     return derivedName.trim().length == 0 ? 'press edit to change your name': derivedName;
   }))
  
  
  constructor(private store: Store, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cpId$.subscribe(res=> this.cpId= res);
    this.routeTo=this.activatedRoute.snapshot.queryParamMap.get("continue");
  }


  
  perform(){
   
    this.router.navigate(["auth", "profile", "name", "edit"], {queryParams: {continue: "/auth/profile"}})
  }

}
