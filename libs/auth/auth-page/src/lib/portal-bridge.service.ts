import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { delay, Subject } from 'rxjs';
export type portalType = TemplatePortal | ComponentPortal<any>;
@Injectable()
export class PortalBridgeService {
  private titleProtal= new Subject< portalType> ();
  private actionButtonPortal= new Subject<portalType>();
  public readonly titlePortal$= this.titleProtal.asObservable().pipe(delay(1));
  public readonly actionButtonPortal$= this.actionButtonPortal.asObservable();

  constructor() { }

  setTitlePortal(titlePortal: portalType ){
    this.titleProtal.next(titlePortal);
  }

  setActionButtonPortal(actionButtonPortal: portalType){
    this.actionButtonPortal.next(actionButtonPortal)
  }

}
