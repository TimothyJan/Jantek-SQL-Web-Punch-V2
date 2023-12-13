import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JantekService } from '../../../../services/jantek.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  confirmPassword: string = "";

  addUserForm: FormGroup = new FormGroup({
    employeeNumber: new FormControl("", Validators.required),
    grantAdminstratorRights: new FormControl(false, Validators.required),
    password: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required)
  });

  constructor(
    private _jantekService: JantekService
  ){}

  /** Submit add user form */
  onAddUser() {
    if (this.addUserForm.valid && this.addUserForm.value.password == this.addUserForm.value.confirmPassword) {
      this._jantekService.addUser(this.addUserForm.value);
      this.addUserForm.reset();
      // prevents input field from beign marked as red
      Object.keys(this.addUserForm.controls).forEach(key =>{
        this.addUserForm.controls[key].setErrors(null)
      });
    }
    else
      this.addUserForm.reset();
  }
}
