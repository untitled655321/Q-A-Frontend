import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent implements OnInit{
  loginForm: FormGroup;
  submitted = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  OnSubmit(){
    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }

  }
}
