import { Injectable } from '@angular/core';
import { IUser } from '../../user/userTypes';
import { UserServiceService } from '../services/api/userAPI/user-service.service';
import { userType } from '../../user/accessPolicy';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UserServiceService) {}

  isLoggedIn = false;

  //User clicks login
  auth(userLoginInfo: Partial<IUser>) {
    // Get user credentials and permissions from database
    const userCred = this.userService.getUserCredentials();
    const accessPolicy = this.userService.getUserPolicy();

    //If the user exist. Login In
    if (this.credentialCheck(userCred, userLoginInfo)) {
      //Save user in local storage for persistance after login
      window.localStorage.setItem('user', JSON.stringify(userCred));

      window.localStorage.setItem(
        'access_policy',
        JSON.stringify(accessPolicy)
      );

      this.isLoggedIn = true;
    } else {
      // Else Log out
      this.isLoggedIn = false;
    }
  }

  //Check the credentials of user
  credentialCheck(userCred: userType, userLoginInfo: Partial<IUser>): boolean {
    if (
      userCred.name === userLoginInfo.username &&
      userCred.password === userLoginInfo.password
    ) {
      return true;
    }
    return false;
  }

  //Verifies against assets/users.json for the user. Retuens false if user does not exist
  isAuthenticated() {
    return this.isLoggedIn;
  }

  // Returns the roles of the user
  getUserRole(): any[] {
    let roles = this.userService.user.roles;
    return roles;
  }

  getUserResource() {
    // return this.userAccess.accessPolicies[0].resource;
    return this.userService.accessPolicy.resource;
  }
}
