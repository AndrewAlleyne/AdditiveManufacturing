import { Component } from "@angular/core";
import { INavData } from "@coreui/angular";
import { NavigationService } from "../../services/navigation-service/navigation.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent {
  // Get the roles from the Authentication service and filter them here
  navItems!: INavData[];

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private navigationService: NavigationService) {}

  //Filters out nav items based on user role
  getNavItems(): INavData[] {
    const navItem = this.navigationService.getMenuItems();
    return navItem;
  }
}
