import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'developers-help-wiz',
  templateUrl: './help-wiz.component.html',
  styleUrls: ['./help-wiz.component.scss']
})
export class HelpWizComponent implements OnInit {
  @Output()
  help: EventEmitter<boolean> = new EventEmitter();
  isScrolled:boolean =false;
  constructor() { }

  ngOnInit(): void {
    
  }

  close(){
    this.help.emit(false);
  }

  scroll($event:boolean){
    this.isScrolled = $event;
  }
}
