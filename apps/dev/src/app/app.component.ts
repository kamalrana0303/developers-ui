import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { progressAction } from '@developers/models';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs';

@Component({
  selector: 'developers-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({ height: '*', opacity: 1 })),
      state('false', style({ height: '0px', opacity: 0 })),
      transition('false <=> true', animate(500))
    ])
  ],
})
export class AppComponent {
  constructor(private store: Store){}
  title = 'dev';

  
}
