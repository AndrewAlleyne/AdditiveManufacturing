import { Injectable } from "@angular/core";
import { navItems } from "src/app/containers/default-layout/_nav";
//Import in our user roles
import { INavData } from "@coreui/angular";
import { filter } from "rxjs";
import { IUserRoles } from "src/user/types/userTypes";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  constructor() {}

  navItems!: any;

  // Filters based on user roles object. For now it is static
  filterNavItemsByRole(
    userRole: IUserRoles[],
    userResource: string[]
  ): INavData[] {
    //Filter out roles into an array
    let array: string[] = userRole.flatMap((role: any) => role.name);

    //Creates an array of booleans to check if the nav item contains the current users' role.
    const filteredItems: INavData[] = navItems.filter((item) => {
      const matchingRoles = item.roles?.map((itemRole) =>
        array.includes(itemRole)
      );
      return matchingRoles && matchingRoles.includes(true);
    });

    // Return only the items that match userResource. Generates new children objects
    const newItems = filteredItems.map((item) => {
      const children = item.children?.filter((child) => {
        return child.name && userResource.includes(child.name);
      });
      if (children && children.length > 0) {
        return { ...item, children };
      }
      return item;
    });

    //Filter out the Operations and Control Menu
    const operationsObj = newItems.find(
      (item) => item.name === "Operations & Control"
    );

    console.log("userResource ", userResource);
    console.log("operationsObj ", operationsObj);
    console.log("newItems ", newItems);
    if (operationsObj) {
      const children = operationsObj.children?.filter((child) => {
        const hasRole =
          !child.roles || child.roles.some((r) => array.includes(r));
        return hasRole;
      });

      console.log("children ", children);

      if (children && children.length > 0) {
        operationsObj.children = children;
      } else {
        operationsObj.children = [];
      }
    }

    console.log(newItems);

    return newItems;
  }

  setMenuItems(menuItems: INavData[]) {
    this.navItems = menuItems;
  }

  getMenuItems(): INavData[] {
    //Returns a list excluding settings
    let filteredMenu = this.navItems.filter(
      (item: any) => item.name !== "Settings"
    );
    return filteredMenu;
  }

  getSettingsOnly() {
    return this.navItems.filter((menu: any) => menu.name === "Settings");
  }
}
