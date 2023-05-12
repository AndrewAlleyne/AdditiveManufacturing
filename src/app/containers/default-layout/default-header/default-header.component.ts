import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { ClassToggleService, HeaderComponent, INavData } from "@coreui/angular";
import { UserServiceService } from "src/app/services/api/userAPI/user-service.service";
import { NavigationService } from "src/app/services/navigation-service/navigation.service";
import {
  cilAvTimer,
  cilAudio,
  cilAlarm,
  cilBellExclamation,
  cilAccountLogout,
} from "@coreui/icons";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-default-header",
  templateUrl: "./default-header.component.html",
})
export class DefaultHeaderComponent extends HeaderComponent {
  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4);
  public newTasks = new Array(5);
  public newNotifications = new Array(5);

  settingsOption!: any[];

  user!: any;
  userRole!: any;

  icons = {
    cilAlarm,
    cilAudio,
    cilAvTimer,
    cilBellExclamation,
    cilAccountLogout,
  };

  name!: string;
  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,
    private userService: UserServiceService,
    private router: Router
  ) {
    super();

    // if (this.authService.isLoggedIn) {
    //   let banner = this.loginUserBanner();
    //   this.name = banner.name;
    //   this.userRole = banner.role;
    // }
    // this.userRole = this.userService.getUser().roles.;
    this.name = this.userService.getUser().name;
  }

  // TODO REFACTOR THIS.
  getSettingsOnly(): any {
    this.settingsOption = this.navigationService.getSettingsOnly();
    if (this.settingsOption.length == 0) return [];
    return this.settingsOption[0].children;
  }

  getUserRoles(): any[] {
    //Check if authenticarted.
    let userRole = this.userService.getUserRoles();
    return userRole;
  }

  getUsername(): string {
    let user = this.userService.getUser();
    return user.name;
  }

  loginUserBanner() {
    let rolesObject = {};
    let rolesArray = this.getUserRoles();
    Object.assign(rolesObject, ...rolesArray);

    return { name: this.getUsername(), role: rolesObject };
  }

  logout() {
    //Chcek if user is logged in, returns null if no one is logged in
    let user = window.localStorage.getItem("user");
    if (user) {
      window.localStorage.clear();
      this.router.navigate(["./login"]);
    }
  }
}
