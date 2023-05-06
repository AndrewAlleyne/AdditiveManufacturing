// User
// export interface userType {
//   name: string;
//   email: string;
//   password: string;
//   avatar: string;
//   roles: { name: string; description: string }[];
// }

// // User access policy
// export interface userAccessPolicy {
//   resource: string[];
//   actions: string[];
//   condition: string;
// }

export const user = {
  name: "John Doe",
  email: "john.doe@text.com",
  password: "123456",
  avatar: "",
  roles: [
    {
      name: "Admin",
      description: "Some what of a powerful user",
    },
  ],
};

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

export const accessPolicy = {
  resource: MASTER,
  actions: ["view", "create", "update", "delete"],
  condition: "",
};

// Rn
