import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/user/userTypes';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //Create a from group and assocaite the view
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (window.localStorage.getItem('user')) {
      this.authService.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
    }
  }

  // Checks credentials to allow or deny user access
  onSubmit() {
    // Get user credentials from form
    let credentials: Partial<IUser> = this.loginForm.value;

    //Authorize user with credentials
    this.authService.auth(credentials);

    //Check if user is authenticated
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Login Component, user needs to authenticate');
    }
  }

  //Navigates us the credentials page for DEMO
  forgotPassword() {
    console.log('Will show password on screen');
    this.router.navigate(['/show-credentials']);
  }
}
