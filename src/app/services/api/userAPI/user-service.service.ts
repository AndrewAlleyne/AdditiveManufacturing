import {
  IUser,
  IUserAccessPolicy,
  IUserRoles,
} from "./../../../../user/types/userTypes";
import { Injectable } from "@angular/core";
import { users } from "../../../../user/initialUserLoad";

// Retrieves User, access policies and permissions from the backend
@Injectable({
  providedIn: "root",
})
export class UserServiceService {
  // BAD CODE. SHOULD COME FROM DB.
  user!: IUser;
  users = users;
  accessPolicy!: IUserAccessPolicy;
  roles!: IUserRoles[];

  constructor() {}

  /* //Return user object
  getUserCredentials(): userType {
    // return this.userAccess;
    return this.user;
  } */

  //Return user object
  getUserCredentialsUsingEmail(userEmail: string): IUser {
    // Find the user in the list of user objects
    // TODO REPLACE USING API
    let user = users.find((x) => {
      return x.email === userEmail;
    });

    // Should throw a better error
    if (user === undefined) {
      throw new Error("User not found!");
    }

    this.user = user;
    this.accessPolicy = user.accessPolicy;

    return user;
  }

  getUser(): IUser {
    let user = window.localStorage.getItem("user");

    if (user) {
      return JSON.parse(user);
    }
    return JSON.parse("undefined");
  }

  // getUserPolicy(): IUserAccessPolicy {
  //   return this.accessPolicy;
  // }

  /* Returns access policy object for correct user.  */
  getUserPolicy(user: IUser): IUserAccessPolicy {
    return user.accessPolicy;
  }

  getUserRoles(): IUserRoles[] {
    let localStore = window.localStorage.getItem("user");

    if (localStore) {
      let obj = JSON.parse(localStore);
      return obj.roles;
    }
    return this.roles;
  }

  setUserRoles(roles: IUserRoles[]) {
    this.roles = roles;
  }
}
