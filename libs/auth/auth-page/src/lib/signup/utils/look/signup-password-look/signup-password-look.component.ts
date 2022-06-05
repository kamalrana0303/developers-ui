import { Component, OnInit, Optional } from '@angular/core';
import { AuthPageConfigurations } from '../../../../auth-page.config';

@Component({
  selector: 'developers-signup-password-look',
  templateUrl: './signup-password-look.component.html',
  styleUrls: ['./signup-password-look.component.scss']
})
export class SignupPasswordLookComponent implements OnInit {
  brand:string= this.config.brand
  constructor(@Optional() private config: AuthPageConfigurations) { }

  ngOnInit(): void {
  }

}
