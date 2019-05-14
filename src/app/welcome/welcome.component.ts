import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName = '';
  welcomeMessage = '';
  errorMessage = '';

  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) {
  }

  ngOnInit() {
    this.userName = this.route.snapshot.params.name;
  }

  getWelcomeMessage() {
    this.welcomeDataService.getMessage().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParam() {
    this.welcomeDataService.getMessageWithParam(this.userName).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }


  getErrorMessage() {
    this.welcomeDataService.getError().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log('welcome message');
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessage = response.message;
  }

  handleErrorResponse(error) {
    this.welcomeMessage = error;
    this.errorMessage = error.error.message;
  }
}
