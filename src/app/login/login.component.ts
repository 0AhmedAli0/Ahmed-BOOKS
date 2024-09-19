import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; //programatic routing يعني بنقل ما بين الصفحات عن طريق الكود
import { AuthnticationService } from '../authntication.service';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private _Router: Router,
    private _AuthnticationService: AuthnticationService,
    private _UsernameService: UsernameService
  ) {}
  loginError: string = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      // Validators.pattern(/^[A-Z][a-z]{2,5}$/),
    ]),
  });
  submitlogin(forminfo: FormGroup) {
    this._AuthnticationService.login(forminfo.value).subscribe((response) => {
      console.log(response);
      if (response[0].id > 0) {
        //go to login
        localStorage.setItem('id', response[0].id);
        localStorage.setItem(
          'username',
          response[0].firstName + response[0].lastName
        );
        //update userservice
        this._UsernameService.userName.next(
          response[0].firstName + response[0].lastName
        );

        this._Router.navigate([`/home`]); //وديني للصفحه بتاعه الرئيسيه
      } else {
        this.loginError = 'email is Wrong';
      }
    });
  }
}
