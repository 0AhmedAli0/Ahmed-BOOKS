import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router'; //programatic routing يعني بنقل ما بين الصفحات عن طريق الكود
import { AuthnticationService } from '../authntication.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(
    private _Router: Router,
    private _AuthnticationService: AuthnticationService
  ) {}
  registerError: string = '';
  rejistterForm: FormGroup = new FormGroup({
    FirstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    LastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      // Validators.pattern(/^[A-Z][a-z]{2,5}$/),
    ]),
  });
  submitRegister(forminfo: FormGroup) {
    this._AuthnticationService
      .register(forminfo.value)
      .subscribe((response) => {
        console.log(response);
        if (response.id > 0) {
          //go to login
          this._Router.navigate(['/login']); //وديني للصفحه بتاعه اللوجن
        } else {
          this.registerError = 'email is already register';
        }
      });
  }
}
