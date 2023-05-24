import { INavData } from "@coreui/angular";

export const navItems: INavData[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    iconComponent: { name: "cil-speedometer" },
    badge: {
      color: "info",
      text: "",
    },
    roles: [
      "Admin",
      "Accounts",
      "Finance",
      "Master",
      "Engineering",
      "SupplyChainManagement",
      "SalesAndMarketing",
    ],
  },
  {
    name: "Asset Info",
    url: "/asset",
    iconComponent: { name: "cil-puzzle" },
    badge: {
      color: "info",
      text: "",
    },
    roles: [
      "Admin",
      "Accounts",
      "Finance",
      "Master",
      "Engineering",
      "SupplyChainManagement",
      "SalesAndMarketing",
    ],
  },
  {
    name: "Additive Manufacturing",
    url: "/additive-manufacturing",
    iconComponent: { name: "cil-puzzle" },
    badge: {
      color: "info",
      text: "",
    },
    children: [
      {
        name: "Powder",
        url: "/additive-manufacturing/powder",
        roles: [""],
      },
      {
        name: "Silicone",
        url: "/additive-manufacturing/silicone",
        roles: [""],
      },
    ],
    roles: [
      "Admin",
      "Accounts",
      "Finance",
      "Master",
      "Engineering",
      "SupplyChainManagement",
      "SalesAndMarketing",
    ],
  },
  {
    name: "Operations & Control",
    url: "/ops",
    iconComponent: { name: "cilPuzzle" },
    badge: {
      color: "",
      text: "",
    },
    children: [
      {
        name: "Customer DataBase",
        url: "/ops/customer-database",
        roles: ["Accounts"],
      },
      {
        name: "Asset Tracking",
        url: "/ops/asset-tracking",
        roles: ["Admin"],
      },
      {
        name: "Key & Lock Management",
        url: "/ops/key-lock-management",
        roles: ["Admin"],
      },
      {
        name: "Maintenance Scheduling",
        url: "/ops/maintenance-scheduling",
        roles: ["Admin"],
      },
      {
        name: "Preventive Maintenance",
        url: "/ops/preventive-maintenance",
        roles: ["Admin"],
      },
      {
        name: "Equipment Tracking",
        url: "/ops/equipment-tracking",
        roles: ["Admin"],
      },
      {
        name: "Warranty Tracking",
        url: "/ops/warranty-tracking",
        roles: ["Admin"],
      },
      {
        name: "Maintenance History",
        url: "/ops/maintenance-history",
        roles: ["Admin"],
      },
      {
        name: "Routing",
        url: "/ops/routing",
        roles: ["Engineering"],
      },
      {
        name: "Job Management",
        url: "/ops/job-management",
        roles: ["Engineering"],
      },
      {
        name: "Scheduling",
        url: "/ops/scheduling",
        roles: ["Engineering"],
      },
      {
        name: "Service History Tracking",
        url: "/ops/service-history-tracking",
        roles: ["Engineering"],
      },
      {
        name: "Technician Management",
        url: "/ops/technician-management",
        roles: ["Engineering"],
      },
      {
        name: "Repair Tracking",
        url: "/ops/repair-tracking",
        roles: ["Engineering"],
      },
      {
        name: "Job Costing",
        url: "/ops/job-costing",
        roles: ["Finance"],
      },
      {
        name: "Cost Tracking",
        url: "/ops/cost-tracking",
        roles: ["Finance"],
      },
      {
        name: "Work Order Management",
        url: "/ops/work-order-management",
        roles: ["SalesAndMarketing"],
      },
      {
        name: "Inventory Management",
        url: "/ops/inventory-management",
        roles: ["SupplyChainManagement"],
      },
      {
        name: "Vehicle Information",
        url: "/ops/vehicle-information",
        roles: ["SupplyChainManagement"],
      },
      {
        name: "Dispatch Management",
        url: "/ops/dispatch-management",
        roles: ["SupplyChainManagement"],
      },
      {
        name: "Purchasing",
        url: "/ops/purchasing",
        roles: ["SupplyChainManagement"],
      },
      {
        name: "Inventory control",
        url: "/ops/inventory-control",
        roles: ["SupplyChainManagement"],
      },
      {
        name: "Parts Inventory Management",
        url: "/ops/parts-inventory-management",
        roles: ["SupplyChainManagement"],
      },
    ],
    roles: [
      "Admin",
      "Accounts",
      "Finance",
      "Master",
      "Engineering",
      "SupplyChainManagement",
      "SalesAndMarketing",
    ],
  },
  {
    name: "Settings",
    url: "/settings",
    iconComponent: {
      name: "cilSettings",
    },
    children: [
      {
        name: "User Management",
        url: "/settings/user-management",
      },
      {
        name: "Dashboard",
        url: "/settings/dashbaord",
      },
      {
        name: "Sensors/Actuator Management",
        url: "/settings/sensors-actuators-management",
      },
      {
        name: "Machines Managment",
        url: "/settings/machines-management",
      },
      {
        name: "Tools & Jigs Management",
        url: "/settings/tools-jigs-management",
      },
      {
        name: "Asset Management",
        url: "/settings/asset-management",
      },
      {
        name: "OEM Scheduled Preventive Maintenance",
        url: "/settings/oem-scheduled-preventative-maintenace",
      },
      {
        name: "Supervised Learning",
        url: "/settings/supervised-learning",
      },
      {
        name: "Un-Supervised Learning",
        url: "/settings/unsupervised-learning",
      },
      {
        name: "Reporting Access",
        url: "/settings/report-access",
      },
      {
        name: "Data Path / Backup",
        url: "/settings/data-path-backup",
      },
      {
        name: "Predicted Maintenance",
        url: "/settings/data-path-backup",
      },
      {
        name: "Restore",
        url: "/settings/restore",
      },
      {
        name: "Special Features",
        url: "/settings/special-features",
      },
    ],
    roles: [
      "Master",
      "Admin",
      "Engineering",
      "Accounts",
      "Finance",
      "SalesAndMarketing",
      "SupplyChainManagement",
    ],
  },
  {
    name: "Report",
    url: "/report",
    iconComponent: {
      name: "cilNotes",
    },
    badge: {
      color: "info",
      text: "",
    },
    roles: [""],
  },
  {
    name: "Analysis",
    url: "/analysis",
    iconComponent: {
      name: "cilMagnifyingGlass",
    },
    children: [
      {
        name: "Failure ",
        url: "/analysis/failure-analysis",
      },
      {
        name: "Preventative vs Predicted ",
        url: "/analysis/preventative-vs-predicted-analysis",
      },
      {
        name: "Financial ",
        url: "/analysis/financial-analysis",
      },
      {
        name: "Automatic Diagnosis",
        url: "/analysis/automatic-diagnosis-analysis",
      },
      {
        name: "Root Cause",
        url: "/analysis/root-cause-analysis",
      },
    ],
    roles: ["Admin", "Accounts", "Engineering", "SalesAndMarketing"],
  },
];
