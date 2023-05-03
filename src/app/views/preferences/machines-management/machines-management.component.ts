import { Component, EventEmitter, Output } from '@angular/core';
//Import icons one by one to reduce bundle size
import { cilOptions, cilPlus, cilX, cilPencil } from '@coreui/icons';

@Component({
  selector: 'app-machines-management',
  templateUrl: './machines-management.component.html',
  styleUrls: ['./machines-management.component.scss'],
})
export class MachinesManagementComponent {
  icons = { cilOptions, cilPlus, cilX, cilPencil };

  // Listen for events from the parent
  // Add / Edit / Delete	Group 	Role	Access Control
  machineTabs = {
    tabs: [
      { name: 'Manage' },
      { name: 'Group' },
      { name: 'Role' },
      { name: 'Access Control' },
    ],
  };

  onDropdownClicked() {
    console.log('Log this data');
  }
}
