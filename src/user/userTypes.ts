// User common login structure
export interface IUser {
  id: number;
  username: string;
  password: string;
  role: string;
}

// export interface IUserType {
//   user: {
//     name: string;
//     email: string;
//     password: string;
//     roles: {
//       name: string;
//       description: string;
//     }[];
//   }[];
//   accessPolicies: [
//     {
//       resource: string[];
//       actions: string[];
//       condition: string;
//     }
//   ];
// }
