import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JantekService } from '../../../services/jantek.service';

const today = new Date();
const dayInMs = 86400000; // that is: 24 * 60 * 60 * 1000

@Component({
  selector: 'app-view-total-hours',
  templateUrl: './view-total-hours.component.html',
  styleUrl: './view-total-hours.component.css'
})
export class ViewTotalHoursComponent implements OnInit{
  isAdmin: boolean = false;
  totalHours: number;
  dateFormat: string;
  dateRangeFrom: string = new Date(Date.now() - (today.getDay()*dayInMs) - (7*dayInMs)).toString();
  dateRangeTo: string = new Date(Date.now() - (today.getDay()*dayInMs) + (6*dayInMs)).toString();
  ViewTotalHoursForm: FormGroup = new FormGroup({
    user: new FormControl({value: "", disabled: true}, Validators.required),
  });

  constructor(
    private _jantekService: JantekService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this._jantekService.isAdmin;
    if(this.isAdmin){
      this.ViewTotalHoursForm.controls['user'].enable();
    }
    else {
      this.ViewTotalHoursForm.controls['user'].disable();
    }
    /** Needed to get the companyInfo including dateformat */
    this._jantekService.getCompanyInfo();
    this.dateFormat = this._jantekService.dateFormatDisplay(this._jantekService.getDateFormat());
  }

  onSubmit() {
    if (this.ViewTotalHoursForm.valid) {
      this.totalHours = this._jantekService.getTotalHours(this.ViewTotalHoursForm.value);
    }
  }
}
