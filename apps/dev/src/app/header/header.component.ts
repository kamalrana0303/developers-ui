import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

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

}
