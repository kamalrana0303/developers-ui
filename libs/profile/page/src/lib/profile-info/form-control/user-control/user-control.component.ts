import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, MinValidator, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { filter, map, min, Observable } from 'rxjs';

@Component({
  selector: 'developers-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss']
})
export class UserControlComponent implements OnInit {
  
  @Input()
  name: any

  @Output()
  rename: EventEmitter<string> = new EventEmitter<string>();

  isFormSubmit$ :Observable<boolean> | any;

  public fg: FormGroup | any

  constructor(private fb:FormBuilder, private fM: FocusMonitor) { }

  ngOnInit(): void {
    this.fg=this.fb.group({
      username: [this.name, Validators.compose([Validators.required, Validators.minLength(1)])]
    })
  }

  onSubmit(){
    if(this.fg.valid){
      this.rename.emit(this.fg.value.username);
    }
  }
}
