import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginService} from "./login.service";
import {Admin} from "./admin";

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  private admin: Admin ;

  constructor(
      fb:FormBuilder ,
      private loginService :LoginService,
      private router: Router,
  ) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      this.loginService.login(this.email, this.password)
          .subscribe(
              data => {
                this.router.navigate(['../pages/dashboard']);
              },
              error => {
                this.alertService.error(error);
                this.loading = false;
              });
    }
  }
}
