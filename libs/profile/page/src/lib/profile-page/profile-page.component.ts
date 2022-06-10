import { Component, OnInit } from '@angular/core';
import { init, State } from '@developers/profile/data-access';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'developers-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(private store: Store<State>, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.store.dispatch(init());
  }


}
