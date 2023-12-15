import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JantekService } from '../../../services/jantek.service';
import { Punch } from '../../../models/punch';

const today = new Date();
const dayInMs = 86400000; // that is: 24 * 60 * 60 * 1000

@Component({
  selector: 'app-punch-history',
  templateUrl: './punch-history.component.html',
  styleUrl: './punch-history.component.css'
})
export class PunchHistoryComponent implements OnInit{
  isAdmin: boolean = false;
  dateFormat: string;
  dateRangeFrom: string = new Date(Date.now() - (today.getDay()*dayInMs) - (7*dayInMs)).toString();
  dateRangeTo: string = new Date(Date.now() - (today.getDay()*dayInMs) + (6*dayInMs)).toString();
  punchHistoryForm: FormGroup = new FormGroup ({
    user: new FormControl({value: "", disabled: true}, Validators.required),
    payPeriod: new FormControl("Current", Validators.required),
    dateRangeFrom: new FormControl(""),
    dateRangeTo: new FormControl(""),
  });
  displayedColumns: string[] = ["date", "in", "out", 'company', "department", "job"];
  dataSource: Punch[] = [];

  constructor(
    private _jantekService: JantekService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this._jantekService.isAdmin;
    if(this.isAdmin){
      this.punchHistoryForm.controls['user'].enable();
    }
    else{
      this.punchHistoryForm.controls['user'].disable();
    }
    /** Needed to get the companyInfo including dateformat */
    this._jantekService.getCompanyInfo();
    this.dateFormat = this._jantekService.dateFormatDisplay(this._jantekService.getDateFormat());
  }

  payPeriodChanged(event:any) {
    switch(event) {
      case "Current":
        this.dateRangeFrom = new Date(Date.now() - (today.getDay()*dayInMs) - (7*dayInMs)).toString();
        this.dateRangeTo = new Date(Date.now() - (today.getDay()*dayInMs) + (6*dayInMs)).toString();
        break;
      case "Previous":
        this.dateRangeFrom = new Date(Date.now() - (today.getDay()*dayInMs) - (7*dayInMs) - (14*dayInMs)).toString();
        this.dateRangeTo = new Date(Date.now() - (today.getDay()*dayInMs) + (6*dayInMs) - (14*dayInMs)).toString();
        break;
      default:
        break;
    }
  }

  onSubmit() {
    this.punchHistoryForm.controls["dateRangeFrom"].setValue(this.dateRangeFrom);
    this.punchHistoryForm.controls["dateRangeTo"].setValue(this.dateRangeTo);
    if (this.punchHistoryForm.valid) {
      this._jantekService.getPunchHistory(this.punchHistoryForm.value);
    }
  }
}
