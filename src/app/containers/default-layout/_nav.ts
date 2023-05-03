import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: '',
    },
    roles: ['Admin', 'Accounts', 'Analysis', 'Master'],
  },
  {
    name: 'Operations & Control',
    url: '/ops',
    iconComponent: { name: 'cilPuzzle' },
    badge: {
      color: '',
      text: '',
    },
    children: [
      {
        name: 'Engineering',
        url: '/ops/engineering',
      },
      {
        name: 'Supply Chain Mgmnt',
        url: '/ops/supply-chain-management',
      },
      {
        name: 'Sales & Marketing',
        url: '/ops/sales-marketing',
      },
      {
        name: 'Admin',
        url: '/ops/admin',
      },
      {
        name: 'Finance',
        url: '/ops/finance',
      },
      {
        name: 'Accounts',
        url: '/ops/accounts',
      },
    ],
    roles: ['Admin'],
  },
  {
    name: 'Settings',
    url: '/settings',
    iconComponent: {
      name: 'cilSettings',
    },
    children: [
      {
        name: 'User Management',
        url: '/settings/user-management',
      },
      {
        name: 'Dashboard',
        url: '/settings/dashbaord',
      },
      {
        name: 'Sensors/Actuator Management',
        url: '/settings/sensors-actuators-management',
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
      // {
      //   name: 'Supply Chain Management',
      //   url: '/settings/supply-chain-management',
      // },
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
    roles: ['Admin', 'Master', 'Engineering'],
  },
  {
    name: 'Report',
    url: '/report',
    iconComponent: {
      name: 'cilNotes',
    },
    badge: {
      color: 'info',
      text: '',
    },
    roles: [''],
  },
  {
    name: 'Analysis',
    url: '/analysis',
    iconComponent: {
      name: 'cilMagnifyingGlass',
    },
    children: [
      {
        name: 'Failure ',
        url: '/analysis/failure-analysis',
      },
      {
        name: 'Preventative vs Predicted ',
        url: '/analysis/preventative-vs-predicted-analysis',
      },
      {
        name: 'Financial ',
        url: '/analysis/financial-analysis',
      },
      {
        name: 'Automatic Diagnosis',
        url: '/analysis/automatic-diagnosis-analysis',
      },
      {
        name: 'Root Cause',
        url: '/analysis/root-cause-analysis',
      },
    ],
    roles: ['Admin', 'Accounts', 'Engineering'],
  },
];
