import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JantekService } from '../../../../services/jantek.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent {
  deleteUserForm: FormGroup = new FormGroup({
    employeeNumber: new FormControl("", Validators.required),
  });

  constructor(
    private _jantekService: JantekService
  ){}

  /** Submit delete user form */
  onDeleteUser() {
    if (this.deleteUserForm.valid) {
      this._jantekService.deleteUser(this.deleteUserForm.value);
      this.deleteUserForm.reset();
      // prevents input field from beign marked as red
      Object.keys(this.deleteUserForm.controls).forEach(key =>{
        this.deleteUserForm.controls[key].setErrors(null);
      });
    }
    else
      this.deleteUserForm.reset();
  }
}
