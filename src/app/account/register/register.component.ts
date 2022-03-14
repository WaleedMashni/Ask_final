import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl(''),
    password:new FormControl('',[Validators.required, Validators.minLength(10)]),
    radio:new FormControl(''),
    check:new FormControl('',Validators.required),
  })
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  //Login
  goToLoginPage()
  {
    console.log(this.registerForm.value)
    this.router.navigate(['account']);     
  }

  }

  








