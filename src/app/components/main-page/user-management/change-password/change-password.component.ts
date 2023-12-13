import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JantekService } from '../../../../services/jantek.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup = new FormGroup({
    employeeNumber: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required)
  });

  constructor(
    private _jantekService: JantekService
  ){}

  /** Submit delete user form */
  onchangePassword() {
    if (this.changePasswordForm.valid && this.changePasswordForm.value.password == this.changePasswordForm.value.confirmPassword) {
      this._jantekService.changePassword(this.changePasswordForm.value);
      this.changePasswordForm.reset();
      // prevents input field from beign marked as red
      Object.keys(this.changePasswordForm.controls).forEach(key =>{
        this.changePasswordForm.controls[key].setErrors(null)
      });
    }
    else
      this.changePasswordForm.reset();
  }
}
