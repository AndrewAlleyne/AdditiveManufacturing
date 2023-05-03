import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  routes = [
    {
      children: [
        {
          name: 'Dashboard',
          url: '/settings/dashbaord',
        },
        {
          name: 'Sensors/Actuator Management',
          url: '/settings/sensor-actuator-management',
        },
        {
          name: 'Machines Managment',
          url: '/settings/machines-management',
        },
        {
          name: 'Tools & Jigs Management',
          url: '/settings/tools-jigs-management',
        },
        {
          name: 'Asset Management',
          url: '/settings/asset-management',
        },
        {
          name: 'Supply Chain Management',
          url: '/settings/supply-chain-management',
        },
        {
          name: 'OEM Scheduled Preventative Maintenace',
          url: '/settings/oem-scheduled-preventative-maintenace',
        },
        {
          name: 'Supervised Learning',
          url: '/settings/supervised-learning',
        },
        {
          name: 'Un-Supervised Learning',
          url: '/settings/unsupervised-learning',
        },
        {
          name: 'Reporting Access',
          url: '/settings/report-access',
        },
        {
          name: 'Data Path / Backup',
          url: '/settings/data-path-backup',
        },
        {
          name: 'Restore',
          url: '/settings/restore',
        },
        {
          name: 'Special Features',
          url: '/settings/special-features',
        },
      ],
    },
  ];

  sendData(event: string) {
    console.log(event);
    console.log('Called');
    alert('called');
  }
}
