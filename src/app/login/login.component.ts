import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthService} from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'mehdi';
  password = '';
  invalidLogin = false;


  constructor(private router: Router, private authService: HardcodedAuthService) {
  }

  ngOnInit() {
    if (this.authService.isUserLoggedIn()) {
      this.router.navigate(['welcome', this.username]);
    }
  }

  onClickMe() {

    if (this.authService.authenticate(this.username, this.password)) {
      // Routing to welcome page
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }
}
