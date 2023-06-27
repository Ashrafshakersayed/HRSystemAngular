import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
  CanActivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private _authService: AuthService, private router: Router) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this._authService.isAuthenticated) {
      return true;
    } else {
      window.location.href= environment.authUrl;
      return false;
    }
  }
}
