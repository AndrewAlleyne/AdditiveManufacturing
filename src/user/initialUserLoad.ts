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
  name: 'John Doe',
  email: 'john.doe@text.com',
  password: '123456',
  avatar: '',
  roles: [
    {
      name: 'Admin',
      description: 'Some what of a powerful user',
    },
  ],
};

export const accessPolicy = {
  resource: [
    'Engineering',
    'Supply Chain Management',
    'Sales & Marketing',
    'Admin',
    'Finance',
    'Accounts',
    'User Management',
    'Failure Analysis',
    'Preventive vs Predicted Analysis',
    'Financial Analysis',
    'Automatic Diagnosis Analysis',
    'Root Cause Analysis',
  ],
  actions: ['view', 'create', 'update', 'delete'],
  condition: '',
};
