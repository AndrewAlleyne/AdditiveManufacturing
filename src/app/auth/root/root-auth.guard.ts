import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: "root",
})
export class RootAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let localUser = window.localStorage.getItem("user");
    localUser = JSON.stringify(localUser);

    //Verify user access
    let isUserLoggedIn = this.authService.isLoggedIn || localUser !== null;

    if (isUserLoggedIn) {
      console.log("hit");
      this.router.navigateByUrl("http://localhost:4200/dashboard");
      return true;
    }

    return false;
  }
}
