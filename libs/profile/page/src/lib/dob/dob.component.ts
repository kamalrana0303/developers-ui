import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from '@developers/models';
import { selectProfileDOB, updateDob } from '@developers/profile/data-access';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import {Moment} from 'moment';
import { tap } from 'rxjs';
@Component({
  selector: 'developers-dob',
  templateUrl: './dob.component.html',
  styleUrls: ['./dob.component.scss']
})
export class DobComponent implements OnInit {
  submitting:boolean =false;
  routeTo: string | any;
  queryParams= {};
  dob$=this.store.pipe(select(selectProfileDOB));
  fg:FormGroup | any;
  profile: Profile | any =this.activateRouter.snapshot.data['profileName']
  // months= [
  //   {
  //     name: "January",
  //     value: "01"
  //   },
  //   {
  //     name: "Febuary",
  //     value: "02"
  //   },
  //   {
  //     name: "March",
  //     value: "03"
  //   }
  // ]
  constructor(private activateRouter:ActivatedRoute, private store: Store, private router:Router,private fb:FormBuilder, private dateAdapter: DateAdapter<any>) { 
    this.routeTo =this.activateRouter.snapshot.queryParamMap.get("continue")
  }

  ngOnInit(): void {
    // this.fg = this.fb.group({
    //   date: new FormGroup({
    //     day: new FormControl( null,Validators.compose([Validators.required, Validators.minLength(2),Validators.maxLength(2) ])),
    //     month: new FormControl(null,Validators.compose([Validators.required])),
    //     year: new FormControl(null,Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(2)]))
    //   })
    // })
     
    this.fg= this.fb.group({
      date: new FormControl(moment(this.profile.dob), [Validators.required])
    })
  }

  error(){
    (this.fg as FormGroup)
  }

  myFilter = (d: any | null): boolean => {
   if(this.dateAdapter && d){
    const day=this.dateAdapter.getDate(d)
    return day !== 0 && day !== 6;
   }
   return false;
    
   
    // Prevent Saturday and Sunday from being selected.
    
  };

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = (this.fg as FormGroup).controls['date'].value;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    (this.fg as FormGroup).controls['date'].setValue(ctrlValue);
    datepicker.close();
  }

  updateDOB(){
    if(this.fg.valid){
      let dob=moment(this.fg.value.date).format("YYYY-MM-DD")
      this.store.dispatch(updateDob({cpId:this.profile?.cpId, dob: dob}))
    }
  }

  cancel(){
    this.router.navigate(['/auth/profile'])
  }

  onProgressShow(){
    this.submitting = true;
  }

  onProgressHide(){
    this.submitting = false;
  }

}
