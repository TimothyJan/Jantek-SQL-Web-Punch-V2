import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JantekService } from '../../../../services/jantek.service';

@Component({
  selector: 'app-modify-rights',
  templateUrl: './modify-rights.component.html',
  styleUrl: './modify-rights.component.css'
})
export class ModifyRightsComponent {
  modifyRightsForm: FormGroup = new FormGroup({
    employeeNumber: new FormControl("", Validators.required),
    grantAdminstratorRights: new FormControl(false, Validators.required),
  });

  constructor(
    private _jantekService: JantekService
  ){}

  /** Submit delete user form */
  onmodifyRights() {
    if (this.modifyRightsForm.valid) {
      this._jantekService.modifyRights(this.modifyRightsForm.value);
      this.modifyRightsForm.reset();
      // prevents input field from beign marked as red
      Object.keys(this.modifyRightsForm.controls).forEach(key =>{
        this.modifyRightsForm.controls[key].setErrors(null);
      });
    }
    else
      this.modifyRightsForm.reset();
  }
}
