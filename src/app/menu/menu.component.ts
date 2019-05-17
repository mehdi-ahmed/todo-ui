import { Component, OnInit } from '@angular/core';
import {HardcodedAuthServices} from '../service/hardcoded-auth.services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  currentUser;

  constructor(private authService: HardcodedAuthServices) {
  }

  ngOnInit() {
  }

}
