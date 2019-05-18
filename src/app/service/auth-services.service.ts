import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {API_CALLS} from '../utils/api_calls.util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_USER = 'AUTH_USER';
  AUTH_TOKEN = 'AUTH_TOKEN';
  BASE_URL: string = environment.baseURL;

  constructor(private httpClient: HttpClient) {
  }

  executeBasicAuthService(username, password) {

    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    const headers = new HttpHeaders({
      'Content-Type': 'text/plain; charset=utf-8',
      authorization: basicAuthHeaderString,
      Accept: 'application/json'
    });
    console.log(this.BASE_URL + API_CALLS.AUTHENTICATE);

    // @ts-ignore
    return this.httpClient.get<any>(this.BASE_URL + API_CALLS.AUTHENTICATE, {headers, responseType: 'text'})
      .pipe(
        map(
          data => {
            sessionStorage.setItem(this.AUTH_TOKEN, basicAuthHeaderString);
            sessionStorage.setItem(this.AUTH_USER, username);
            return data;
          }
        )
      );
  }

  executeJwtAuthService(username, password) {

    // @ts-ignore
    return this.httpClient.post<any>(this.BASE_URL + API_CALLS.AUTHENTICATE, {username, password})
      .pipe(
        map(
          data => {
            sessionStorage.setItem(this.AUTH_TOKEN, 'Bearer ' + data.token);
            sessionStorage.setItem(this.AUTH_USER, username);
            return data;
          }
        )
      );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(this.AUTH_USER);
    return user !== null;
  }

  getAuthenticationToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(this.AUTH_TOKEN);
    }
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(this.AUTH_USER);
  }

  logout() {
    sessionStorage.removeItem(this.AUTH_TOKEN);
    sessionStorage.removeItem(this.AUTH_USER);
  }


}
