import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {first} from 'rxjs/operators';
import {AlertService} from '../../../../shared/services/alert.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent implements OnInit{
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  returnUrl: string;



  constructor( private formBuilder: FormBuilder, private authentitactionService: AuthService,
               private router: Router,  private route: ActivatedRoute) {}

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // reset login status
    this.authentitactionService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }
    this.loading = true;
    this.authentitactionService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          console.log(data);
        },
        error => {
          this.loading = false;
        });

  }
}
