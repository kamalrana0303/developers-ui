import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { loginAction } from '../data-access/action';

@Component({
  selector: 'developers-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isOpen:boolean=true;
  // $isLoggedIn=this.store.select(fromStore.selectIsLoggedIn).pipe(take(1));
  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    
  }
  routeToLogin(){
    this.router.navigate(['/auth']);
  }

  goToLoginPage() {
    // const params = [
    //     'response_type=code',
    //     'client_id='+ environment.clientId,
    //     'scope='+environment.scope,
    //     encodeURIComponent('redirect_uri=http://localhost:4200/login'),
    // ];
   // window.location.href = 'http://localhost:8080/oauth/authorize?' + params.join('&');

   this.store.dispatch(loginAction.initLogin());
  }

}
