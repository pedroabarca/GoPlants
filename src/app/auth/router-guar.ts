import {CanActivate} from '@angular/router';


export class RouteGuard implements CanActivate {
  canActivate() {
    // if we are logged in return true, else false
    return false;
  }
}