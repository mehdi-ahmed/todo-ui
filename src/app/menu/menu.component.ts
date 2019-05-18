import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth-services.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  currentUser;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.currentUser = this.authService.getAuthenticatedUser();
  }

}
