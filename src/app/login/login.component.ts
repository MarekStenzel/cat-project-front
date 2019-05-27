import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutes } from '../app-routing-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerLogic = false;

  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  createFormControls() {
    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password,
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  login() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.authService.login(username, password).subscribe((data) => {
      if (data.token) {
        this.authService.isAuthenticated = true;
        this.router.navigate([AppRoutes.PROFILES]);
      }
    });
  }

  register() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.authService.register(username, password).subscribe((data) => {
      if (data.token) {
        this.authService.isAuthenticated = true;
        this.router.navigate([AppRoutes.PROFILES]);
      }
    });
  }

  switchStatus() {
    this.registerLogic = !this.registerLogic;
  }

}
