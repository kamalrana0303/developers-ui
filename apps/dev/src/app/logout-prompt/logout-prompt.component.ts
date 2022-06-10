import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './logout-prompt.component.html',
  styleUrls: ['./logout-prompt.component.scss']
})
export class LogoutPromptComponent implements OnInit {

  constructor(private store: Store, private ref: MatDialogRef<LogoutPromptComponent>) { }

  ngOnInit(): void {
  }

  confirm(){
    this.ref.close(true);
  }
  cancel(){
    this.ref.close(false);
  }

}
