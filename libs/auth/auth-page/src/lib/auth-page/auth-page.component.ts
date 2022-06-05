import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PortalBridgeService, portalType } from '../portal-bridge.service';

@Component({
  selector: 'developers-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  titlePortal$: Observable<portalType>= this.portalBridge.titlePortal$;
  actionButtonPortal$: Observable<portalType> = this.portalBridge.actionButtonPortal$;
  constructor(private portalBridge: PortalBridgeService) { }
  ngOnInit(): void {
  }

}
