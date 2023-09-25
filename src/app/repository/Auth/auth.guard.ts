import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    console.log('authGuard URL: ', url);

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }
    // Store the attempted URL for redirecting
    // this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/banking/accounts/open-account/login-accounts']);
    return false;
  }

}
