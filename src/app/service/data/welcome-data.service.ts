import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HelloMessage} from '../../domain/HelloMessage';
import {sprintf} from 'sprintf-js';
import {API_CALLS} from '../../utils/api_calls.util';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) {
  }

  getMessage() {
    return this.httpClient.get<HelloMessage>('http://localhost:8080/hello-bitches-bean');
  }

  getError() {
    return this.httpClient.get<HelloMessage>('http://localhost:8080/hello-bitches/exception');
  }

  getMessageWithParam(name) {
    return this.httpClient.get<HelloMessage>(sprintf(API_CALLS.GET_MESSAGE_WITH_PARAM, name));
  }
}
