import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  invalidLogin = false;


  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    if (this.authService.isUserLoggedIn()) {
      this.router.navigate(['welcome', this.authService.getAuthenticatedUser()]);
    }
  }

  handleJwtAuth() {

    this.authService.executeJwtAuthService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }
}
