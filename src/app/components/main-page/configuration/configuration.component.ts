import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JantekService } from '../../../services/jantek.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {
  form: FormGroup = new FormGroup({
    punchMode: new FormControl("In/Out"),//, Validators.required),
    levelChangeMode: new FormControl({value: "", disabled: true}),
    actionAfterSuccessfulPunch: new FormControl("View Last Punch"),
    punchHistory: new FormControl(true),
    viewTotalHours: new FormControl(true),
    sendMessages: new FormControl(false),
    viewMessages: new FormControl(false),
    allowUsersToLoginWithoutPassword: new FormControl(false),
  });

  constructor(
    private _jantekService: JantekService
  ) {}

  punchModeChanged(event: any) {
    switch(event) {
      case "In/Out":
        this.form.controls["levelChangeMode"].disable();
        break;
      case "In/Out/Job":
        this.form.controls["levelChangeMode"].enable();
        break;
      case "Swipe and Go":
        this.form.controls["levelChangeMode"].disable();
        break;
      default:
        this.form.controls["levelChangeMode"].disable();
        break;
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this._jantekService.updateConfiguration(this.form.value);
    }
  }

}
