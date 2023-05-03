import { Injectable } from '@angular/core';
import { userAccessPolicy } from 'src/user/accessPolicy';
import { userType } from '../../../../user/accessPolicy';
import { user, accessPolicy } from '../../../../user/initialUserLoad';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {

  user = user;
  accessPolicy = accessPolicy;

  constructor() {}

  //Return user object
  getUserCredentials(): userType {
    // return this.userAccess;
    return this.user;
  }

  getUserPolicy(): userAccessPolicy {
    return this.accessPolicy;
  }
}
