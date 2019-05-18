import { Component, OnInit } from '@angular/core';
import {HardcodedAuthServices} from '../service/hardcoded-auth.services';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth-services.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.logout();
  }

}
