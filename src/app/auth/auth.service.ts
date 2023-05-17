import { IUserAccessPolicy } from "src/user/types/userTypes";
import { users } from "./../../user/initialUserLoad";
import { Injectable } from "@angular/core";
import { IUser, IUserLogin, IUserRoles } from "../../user/types/userTypes";
import { UserServiceService } from "../services/api/userAPI/user-service.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn = false;

  constructor(private userService: UserServiceService) {}

  ngOnInit() {
    if (window.localStorage.getItem("user")) {
      console.log("Loading");
      this.isLoggedIn = true;
    }
  }

  //User clicks login
  auth(userLoginInfo: Required<IUserLogin>) {
    console.log("I am called here");

    /*  Get user credentials and permissions from database
     
    const userCred = this.userService.getUserCredentials();

     returns an object with the correct user credentials for comparison later. 
     Simulates api login request.
   */
    const userCred = this.userService.getUserCredentialsUsingEmail(
      userLoginInfo.username
    );

    const accessPolicy = this.userService.getUserPolicy(userCred);

    const userRoles = this.userService.setUserRoles(userCred.roles);

    //If the user exist. Login In
    if (this.credentialCheck(userCred, userLoginInfo)) {
      //Save user in local storage for persistance after login
      window.localStorage.setItem("user", JSON.stringify(userCred));

      window.localStorage.setItem(
        "access_policy",
        JSON.stringify(accessPolicy)
      );

      this.isLoggedIn = true;
    } else {
      // Else Log out
      this.isLoggedIn = false;
    }
  }

  //Check the credentials of user
  credentialCheck(
    userCred: IUser,
    userLoginInfo: Partial<IUserLogin>
  ): boolean {
    if (
      userCred.email === userLoginInfo.username &&
      userCred.password === userLoginInfo.password
    ) {
      return true;
    }
    return false;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  // Returns the roles of the user
  getUserRole(): any[] {
    let roles = this.userService.user.roles;
    return roles;
  }

  getUserResource(): string[] {
    // return this.userAccess.accessPolicies[0].resource;

    // If the user is logged in already we won't be able to set their access policies and roles without making another request so use local storage (JWT in the near future).
    let localStore = window.localStorage.getItem("access_policy");

    if (localStore) {
      let access_policy: IUserAccessPolicy = JSON.parse(localStore);
      return access_policy.name;
    } else {
      return this.userService.user.accessPolicy.name;
    }
  }

  getCurrentUser(): IUser {
    //If user aithenticated then they are in local storage.
    let user = window.localStorage.getItem("user");
    if (user) {
      let obj = JSON.parse(user);
      return obj;
    }
    throw new Error("User needs to login");
  }
}
