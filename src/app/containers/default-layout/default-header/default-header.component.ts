import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { ClassToggleService, HeaderComponent, INavData } from "@coreui/angular";
import { UserServiceService } from "src/app/services/api/userAPI/user-service.service";
import { NavigationService } from "src/app/services/navigation-service/navigation.service";
import { userType } from "src/user/accessPolicy";
import {
  cilAvTimer,
  cilAudio,
  cilAlarm,
  cilBellExclamation,
} from "@coreui/icons";
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
  userRole: any;
  icons = { cilAlarm, cilAudio, cilAvTimer, cilBellExclamation };

  name: string;
  constructor(
    private navigationService: NavigationService,
    private userService: UserServiceService
  ) {
    super();
    let banner = this.loginUserBanner();
    this.name = banner.name;
    this.userRole = banner.role;
  }

  // TODO REFACTOR THIS.
  getSettingsOnly(): any {
    this.settingsOption = this.navigationService.getSettingsOnly();
    return this.settingsOption[0].children;
  }

  getUserRoles(): any[] {
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
}
