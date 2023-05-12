import { IUser, IUserRoles } from "./../../../../user/types/userTypes";
import { AuthService } from "src/app/auth/auth.service";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OperationsGuardGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = this.authService.getCurrentUser();

    //Check the roles
    if (user) {
      const { role } = route.data;

      if (role && user.roles.find((x) => x.name.includes(role))) {
        return true;
      }
    }

    this.router.navigate(["./404"]);
    return false;
  }
}
