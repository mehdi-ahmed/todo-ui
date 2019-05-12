import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  currentUser = null;

  constructor() { }

  authenticate(user, password) {
    if (user === 'mehdi' && password === 'dummy') {
      sessionStorage.setItem('AUTH_USER', user + '_' + password);
      this.currentUser = user;
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('AUTH_USER');
    return user !==  null;
  }

  logout() {
    sessionStorage.removeItem('AUTH_USER');
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
