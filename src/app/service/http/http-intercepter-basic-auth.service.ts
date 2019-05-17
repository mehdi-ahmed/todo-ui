import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BasicAuthServices} from '../basic-auth.services';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthServe: BasicAuthServices) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    const basicAuthToken = this.basicAuthServe.getAuthenticationToken();
    const username = this.basicAuthServe.getAuthenticatedUser();

    if (basicAuthToken && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthToken
        }
      });
    }
    return next.handle(request);
  }

}
