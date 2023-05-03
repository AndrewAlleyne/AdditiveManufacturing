// User
export interface userType {
  name: string;
  email: string;
  password: string;
  avatar: string;
  roles: { name: string; description: string }[];
}

// User access policy
export interface userAccessPolicy {
  resource: string[];
  actions: string[];
  condition: string;
}
