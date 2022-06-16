import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export type portaLType= TemplatePortal | ComponentPortal<any>
@Injectable({
  providedIn: 'root'
})
export class PortalBridgeService {

  private portal:Subject<portaLType> = new Subject<portaLType> ();
  public readonly portal$= this.portal.asObservable();

  constructor() { }

  setPortal(portal: portaLType){
    this.portal.next(portal);
  }
}
