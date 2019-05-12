import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {HardcodedAuthService} from './hardcoded-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router, private authService: HardcodedAuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.authService.isUserLoggedIn()) {
      return true;
    } else if (this.authService.isUserLoggedIn() ) {
      this.router.navigate(['welcome', this.authService.getCurrentUser()]);
    } else {
      this.router.navigate(['login']);
      return false;
    }


  }
}
