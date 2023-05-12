export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  avatar: string;
  authToken?: string;
  lastLogin?: Date;
  roles: IUserRoles[];
  accessPolicy: IUserAccessPolicy;
}

export interface IUserRoles {
  name: string;
  description: string;
  authorizationLevel?: number;
}

export interface IUserAccessPolicy {
  name: string[];
  description: string[];
  roles: IUserRoles[];
  menus?: string[];
}

export interface IUserActivityLog {
  userId: string;
  action: string;
  timestamp: Date;
}
