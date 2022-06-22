import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { selectProgress, showProgress } from '@developers/progress-bar';
import {  Store } from '@ngrx/store';
import {  map, Observable } from 'rxjs';

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
  public loading$:Observable<boolean> =this.router.events.pipe(map((e:Event)=> {
    return this.checkRoutingEvent(e)
 }))

 
  constructor(private store: Store, private router:Router){
    
  }

  checkRoutingEvent(routerEvent: Event):boolean{
    if(routerEvent instanceof NavigationStart){
      return true;
    }
    if(routerEvent instanceof NavigationCancel || NavigationEnd || NavigationError){
      return false;
    }
    return true;
  }
  title = 'dev';
  
}
