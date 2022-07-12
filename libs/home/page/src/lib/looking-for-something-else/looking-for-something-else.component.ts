import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'developers-looking-for-something-else',
  templateUrl: './looking-for-something-else.component.html',
  styleUrls: ['./looking-for-something-else.component.scss']
})
export class LookingForSomethingElseComponent implements OnInit {
  @Output()
  help: EventEmitter<boolean>  = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  open(){
    this.help.emit(true);
  }

}
