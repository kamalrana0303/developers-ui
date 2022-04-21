import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'developers-logout-prompt',
  template:`
    <h3 mat-dialog-title> Log Out</h3>

    <mat-dialog-content>
      Are you sure you want to logout?
    </mat-dialog-content>

    <mat-dialog-actions>
      <button mat-button (click)="cancel()">
        No
      </button>
      <button mat-button (click)="confirm()">
        Yes
      </button>
    </mat-dialog-actions>

  `,
  styles:[
    `
      :host{
        display: block;
        width: 100%;
        max-width: 300px;
      }
      mat-dialog-actions{
        display: flex;
        justify-content: flex-end;
      }
      [mat-button]{
        padding: 0;
      }
    `,
  ],
})
export class LogoutPromptComponent implements OnInit {

  constructor(private ref: MatDialogRef<LogoutPromptComponent>,) { }

  ngOnInit(): void {
  }

  cancel(){
    this.ref.close(false);
  }
  confirm(){
    this.ref.close(true);
  }

}
