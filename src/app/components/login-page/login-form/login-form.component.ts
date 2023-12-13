import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JantekService } from '../../../services/jantek.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  })

  constructor(
    private _jantekService: JantekService,
  ) {}

  onLogin() {
    if (this.loginForm.valid) {
      this._jantekService.login(this.loginForm.value);
    }
    this.loginForm.reset();
  }
}
