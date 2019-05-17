import { Component, OnInit } from '@angular/core';
import {HardcodedAuthServices} from '../service/hardcoded-auth.services';
import {Router} from '@angular/router';
import {BasicAuthServices} from '../service/basic-auth.services';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: BasicAuthServices) {
  }

  ngOnInit() {
    this.authService.logout();
  }

}
