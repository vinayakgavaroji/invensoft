import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm! : FormGroup;
  submitted:boolean = false;

  constructor(private fb : FormBuilder, private _router : Router){}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.min(8)]]
    })
  }

  login(){
    this.submitted = true;
    this._router.navigate(['dashboard']);
  }

}
