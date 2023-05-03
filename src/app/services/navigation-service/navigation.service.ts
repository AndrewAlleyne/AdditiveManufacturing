import { Injectable } from '@angular/core';
import { navItems } from 'src/app/containers/default-layout/_nav';
//Import in our user roles
import { INavData } from '@coreui/angular';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor() {}

  navItems!: any;

  // Filters based on user roles object. For now it is static
  filterNavItemsByRole(userRole: string[], userResource: string[]): INavData[] {
    //Filter out roles into an array
    let array: string[] = userRole.map((role: any) => role.name);

    //Creates an array of booleans to check if the nav item contains the current users' role.
    const filteredItems: INavData[] = navItems.filter((item) => {
      const matchingRoles = item.roles?.map((itemRole) =>
        array.includes(itemRole)
      );
      return matchingRoles && matchingRoles.includes(true);
    });

    console.log('Filtered', filteredItems);

    // Return only the items that match userResource. Generate new children objects
    const newItems = filteredItems.map((item) => {
      const children = item.children?.filter((child) => {
        return child.name && userResource.includes(child.name);
      });
      if (children && children.length > 0) {
        return { ...item, children };
      }
      return item;
    });

    return newItems;
  }

  setMenuItems(menuItems: INavData[]) {
    this.navItems = menuItems;
  }

  getMenuItems(): INavData[] {
    return this.navItems;
  }
}
