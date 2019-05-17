import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BasicAuthServices} from '../service/basic-auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'mehdi';
  password = '';
  invalidLogin = false;


  constructor(private router: Router, private authService: BasicAuthServices) {
  }

  ngOnInit() {
    if (this.authService.isUserLoggedIn()) {
      this.router.navigate(['welcome', this.username]);
    }
  }

  handleBasicAuth() {

    this.authService.executeBasicAuthService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
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
