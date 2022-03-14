import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = new FormControl(localStorage.getItem('email'), [
    Validators.email,
    Validators.required,
  ]);
  password = new FormControl(localStorage.getItem('password'), [
    Validators.required,
    Validators.minLength(8),
  ]);
  check = new FormControl(false);

  constructor(private router: Router) {}

  ngOnInit(): void {}

  //userdashboard
  submit() {
    if (this.check.value == true) {
      alert('user and password in local');
      localStorage.setItem('email', this.email.value);
      localStorage.setItem('password', this.password.value);
    } else {
      alert('Login without save');
    }
    // this.router.navigate(['userDashboard/user']);
  }

  //register
  goToRegisterPage() {
    this.router.navigate(['account/create']);
  }
}
