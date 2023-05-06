import { Injectable, OnInit } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { NavigationService } from "../services/navigation-service/navigation.service";
import { INavData } from "@coreui/angular";
import { UserServiceService } from "../services/api/userAPI/user-service.service";

@Injectable({
  providedIn: "root",
})

// TODO: TEST INJECTABLE GUARDS
export class AuthGuard implements CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router,
    private navigationService: NavigationService,
    private userService: UserServiceService
  ) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //Check if the user is logged in via the service
    let isLoggedin: boolean = this.authService.isAuthenticated();

    //Get the user role
    const userRole = this.authService.getUserRole();

    // Get the user resources.
    const userResources: string[] = this.authService.getUserResource();

    //Filter nav menu
    const filterMenuItems: INavData[] =
      this.navigationService.filterNavItemsByRole(userRole, userResources);

    //Set the filtered list of nav items.
    this.navigationService.setMenuItems(filterMenuItems);

    //Testing settigns only
    // console.log(this.navigationService.getSettingsOnly(), "Testing settings");

    if (isLoggedin) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
