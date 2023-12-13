import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JantekService } from '../../services/jantek.service';

// const today = new Date(Date.now()-((7)*86400000));
const today = new Date();
const dayInMs = 86400000; // that is: 24 * 60 * 60 * 1000

@Component({
  selector: 'app-web-report-mobile',
  templateUrl: './web-report-mobile.component.html',
  styleUrl: './web-report-mobile.component.css'
})
export class WebReportMobileComponent implements OnInit{
  form: FormGroup = new FormGroup({
    type: new FormControl("Time Card Detail"),//, Validators.required),
    sortBy: new FormControl("Employee #"),//, Validators.required),
    employeeIDFrom: new FormControl({value: "", disabled: false}),
    employeeIDTo: new FormControl({value: "", disabled: false}),
    lastNameFrom: new FormControl({value: "", disabled: true}),
    lastNameTo: new FormControl({value: "", disabled: true}),
    activity: new FormControl("Active Only"),
    dateRange: new FormControl("Current Pay Period"),//, Validators.required),
    dateRangeFrom: new FormControl(new Date(Date.now() - (today.getDay()*dayInMs) - (7*dayInMs))),
    dateRangeTo: new FormControl(new Date(Date.now() - (today.getDay()*dayInMs) + (6*dayInMs))),
    companyFrom: new FormControl("ENGINEERING"),//, Validators.required),
    companyTo: new FormControl("FACILITY"),//, Validators.required),
    departmentFrom: new FormControl("CHEMISTRY"),//, Validators.required),
    departmentTo: new FormControl("DEPARTMENT"),//, Validators.required),
    shiftFrom: new FormControl("0700/1530 M-F"),//, Validators.required)
    shiftTo: new FormControl("Flexible Shift")//, Validators.required)
  });

  ngOnInit(): void {
  }

  constructor(
    private _jantekService: JantekService
    ) {}

  sortByChanged(event: any) {
    switch(event) {
      case "Employee #":
        this.form.controls["employeeIDFrom"].enable();
        this.form.controls["employeeIDTo"].enable();
        this.form.controls["lastNameFrom"].disable();
        this.form.controls["lastNameTo"].disable();
        break;
      case "Last Name":
        this.form.controls["employeeIDFrom"].disable();
        this.form.controls["employeeIDTo"].disable();
        this.form.controls["lastNameFrom"].enable();
        this.form.controls["lastNameTo"].enable();
        break;
      case "SSN":
        this.form.controls["employeeIDFrom"].enable();
        this.form.controls["employeeIDTo"].enable();
        this.form.controls["lastNameFrom"].enable();
        this.form.controls["lastNameTo"].enable();
        break;
      default:
        this.form.controls["employeeIDFrom"].enable();
        this.form.controls["employeeIDTo"].enable();
        this.form.controls["lastNameFrom"].enable();
        this.form.controls["lastNameTo"].enable();
        break;
    }
  }

  dateRangeChanged(event: any) {

    switch(event) {
      case "Current Pay Period":
        var lastSunday = new Date(Date.now() - (today.getDay()*dayInMs) - (7*dayInMs));
        var Saturday = new Date(Date.now() - (today.getDay()*dayInMs) + (6*dayInMs));
        this.form.controls['dateRangeFrom'].setValue(lastSunday);
        this.form.controls['dateRangeTo'].setValue(Saturday);
        break;
      case "Previous Pay Period":
        var previousSunday = new Date(Date.now() - (today.getDay()*dayInMs) - (7*dayInMs) - (14*dayInMs)) ;
        var previousSaturday = new Date(Date.now() - (today.getDay()*dayInMs) + (6*dayInMs) - (14*dayInMs));
        this.form.controls['dateRangeFrom'].setValue(previousSunday);
        this.form.controls['dateRangeTo'].setValue(previousSaturday);
        break;
      case "Current Week":
        var Sunday = new Date(Date.now() - (today.getDay()*dayInMs));
        var Saturday = new Date(Date.now() - (today.getDay()*dayInMs) + (6*dayInMs));
        this.form.controls['dateRangeFrom'].setValue(Sunday);
        this.form.controls['dateRangeTo'].setValue(Saturday);
        break;
      case "Last Week":
        var lastSunday = new Date(Date.now() - (today.getDay()*dayInMs) - (7*dayInMs)) ;
        var lastSaturday = new Date(Date.now() - (today.getDay()*dayInMs) + (6*dayInMs) - (7*dayInMs));
        this.form.controls['dateRangeFrom'].setValue(lastSunday);
        this.form.controls['dateRangeTo'].setValue(lastSaturday);
        break;
      case "Today":
        this.form.controls['dateRangeFrom'].setValue(today);
        this.form.controls['dateRangeTo'].setValue(today);
        break;
      case "Yesterday":
        var yesterday = new Date(Date.now() - dayInMs);
        this.form.controls['dateRangeFrom'].setValue(yesterday);
        this.form.controls['dateRangeTo'].setValue(yesterday);
        break;
      case "Custom Date Range":
        this.form.controls['dateRangeFrom'].setValue("");
        this.form.controls['dateRangeTo'].setValue("");
        break;
      default:
        this.form.controls['dateRangeFrom'].setValue("");
        this.form.controls['dateRangeTo'].setValue("");
        break;
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  onLogoff() {
    this._jantekService.logoff();
  }
}
