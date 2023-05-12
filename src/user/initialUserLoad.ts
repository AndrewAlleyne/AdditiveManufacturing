import { SupplyChainManagementComponent } from "./../app/views/preferences/supply-chain-management/supply-chain-management.component";
import { IUser, IUserAccessPolicy, IUserRoles } from "./types/userTypes";

const MASTER = [
  "Engineering",
  "Supply Chain Management",
  "Sales & Marketing ",
  "Admin",
  "Engineering",
  "Supply Chain Management",
  "Sales & Marketing",
  "Admin",
  "Finance",
  "Accounts",
  "User Management",
  "Dashboard",
  "Sensors/Actuator Management",
  "Machines Management",
  "Tools & Jigs Management",
  "Asset Management",
  "Supply Chain Management",
  "OEM Scheduled Preventive Maintenance",
  "Predicted Maintenance",
  "Supervised Learning",
  "Un-Supervised Learning",
  "Reporting Access",
  "Data Path / Backup",
  "Restore",
  "Special Features",
  "Failure Analysis",
  "Preventive vs Predicted Analysis",
  "Financial Analysis",
  "Automatic Diagnosis Analysis",
  "Root Cause Analysis ( RCA )",
];

const ADMIN = [
  "Engineering",
  "Supply Chain Management",
  "Sales & Marketing",
  "Admin",
  "Finance",
  "Accounts",
  "User Management",
  "Failure Analysis",
  "Preventive vs Predicted Analysis",
  "Financial Analysis",
  "Automatic Diagnosis Analysis",
  "Root Cause Analysis",
];

const FINANCE = [
  "OEM Scheduled Preventive Maintenance",
  "Predicted Maintenance",
];

const ACCOUNTS = [
  "Failure Analysis ",
  "Preventive vs Predicted Analysis",
  "Financial Analysis ",
  "Automatic Diagnosis Analysis ",
  "Root Cause Analysis ( RCA )",
];

const SALES = [
  "Supervised Learning",
  "Failure Analysis",
  "Preventive vs Predictive Analysis",
  "Financial Analysis",
  "Automatic Diagnosis Analysis",
  "Root Cause Analysis (RCA)",
];

const ENGINEERING = [
  "Sensors & Actuators Management",
  "Machines Management",
  "Tools & Jigs Management",
  "Asset Management",
  "Supply Chain Management",
  "Failure Analysis",
  "Preventive vs Predicted Analysis",
  "Financial Analysis",
  "Automatic Diagnosis Analysis",
  "Root Cause Analysis (RCA)",
];

const SUPPLYCHAINMANAGEMENT = [
  "Un-Supervised Learning",
  "Reporting Access",
  "Data Path / Backup",
  "Restore",
  "Special Features",
  "Failure Analysis",
  "Preventive vs Predictive Analysis",
  "Financial Analysis",
  "Automatic Diagnosis Analysis",
  "Root Cause Analysis (RCA)",
];

// DEMO USER ACCOUNTS
const Master: IUser = {
  name: "Master ",
  email: "master@ranial.com",
  password: "123456",
  avatar: "",
  roles: [
    {
      name: "Master",
      description: "Master account.",
      authorizationLevel: 0,
    },
  ],

  accessPolicy: {
    name: MASTER,
    description: ["Master"],
    roles: [],
  },
  authToken: "",
};

const Admin: IUser = {
  name: "Adminstrator ",
  email: "admin@ranial.com",
  password: "123456",
  avatar: "",
  roles: [
    {
      name: "Admin",
      description: "An Administrator that can see everything.",
      authorizationLevel: 0,
    },
  ],

  accessPolicy: {
    name: ACCOUNTS,
    description: ["Admin"],
    roles: [],
  },
  authToken: "",
};

const Accounts: IUser = {
  name: "Accounts ",
  email: "accounts@ranial.com",
  password: "123456",
  avatar: "",
  roles: [
    {
      name: "Accounts",
      description: "An Accounts Managers",
      authorizationLevel: 1,
    },
  ],

  accessPolicy: {
    name: ACCOUNTS,
    description: ["Account"],
    roles: [],
  },
  authToken: "",
};

const Finance: IUser = {
  name: "Finance",
  email: "finance@ranial.com",
  password: "123456",
  avatar: "",
  roles: [
    {
      name: "Finance",
      description: "A Finance Managers",
      authorizationLevel: 2,
    },
  ],
  accessPolicy: {
    name: FINANCE,
    description: ["Finance"],
    roles: [],
  },
  authToken: "",
};

const Engineering: IUser = {
  name: "Engineer",
  email: "engineering@ranial.com",
  password: "123456",
  avatar: "",
  roles: [
    {
      name: "Engineering",
      description: "An Engineer",
      authorizationLevel: 2,
    },
  ],
  accessPolicy: {
    name: ENGINEERING,
    description: ["Engineering"],
    roles: [],
  },
  authToken: "",
};

const SalesAndMarketing: IUser = {
  name: "Marketer",
  email: "salesandmarketing@ranial.com",
  password: "123456",
  avatar: "",
  roles: [
    {
      name: "SalesAndMarketing",
      description: "Handles Sales and Marketing",
      authorizationLevel: 2,
    },
  ],
  accessPolicy: {
    name: SALES,
    description: ["SalesAndMarketing"],
    roles: [],
  },
  authToken: "",
};

const SupplyChainManagement: IUser = {
  name: "SupplyChainManager",
  email: "supplychainmanagement@ranial.com",
  password: "123456",
  avatar: "",
  roles: [
    {
      name: "SupplyChainManagement",
      description: "Handles Supply Chain and Marketing",
      authorizationLevel: 2,
    },
  ],
  accessPolicy: {
    name: SUPPLYCHAINMANAGEMENT,
    description: ["Sales Chain Management"],
    roles: [],
  },
  authToken: "",
};

// User service needs to know what users we have
export const users = [
  Master,
  Admin,
  Accounts,
  Finance,
  Engineering,
  SalesAndMarketing,
  SupplyChainManagement,
];
