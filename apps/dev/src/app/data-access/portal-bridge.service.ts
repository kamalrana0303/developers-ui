import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { LogoutComponent } from '../logout/logout.component';
export type portalType = ComponentPortal<any> | TemplatePortal
@Injectable({
  providedIn: 'root'
})
export class PortalBridgeService {
  
 portal= new Subject<portalType>();
  public readonly portal$= this.portal.asObservable();

  constructor() { }

  setPortal(portal:portalType){
   
    this.portal.next(portal);
  }
}
