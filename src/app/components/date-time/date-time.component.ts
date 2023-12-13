import { Component, OnInit } from '@angular/core';
import { JantekService } from '../../services/jantek.service';
import { CompanyInfo } from '../../models/company-info';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrl: './date-time.component.css'
})
export class DateTimeComponent implements OnInit{
  currentDateTime = new Date();
  timeFormat: string;
  dateFormat: string;

  constructor(
    private _jantekService: JantekService
  ) {}

  ngOnInit(): void {
    /** Needed to get the company info including timeformat and dateformat */
    this._jantekService.getCompanyInfo();

    this.currentDateTimeUpdate();
    this.timeFormat = this.timeFormatDisplay(this._jantekService.getTimeFormat());
    this.dateFormat = this.dateFormatDisplay(this._jantekService.getDateFormat());
  }

  /** Updates currentDateTime every 1 sec */
  currentDateTimeUpdate(): void {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }

  /** Returns the date format display to be used in the pipe of the date */
  dateFormatDisplay(dateformat: number): string {
    let desc = "";
    switch(dateformat) {
      case 0:
        // "mm/dd/yyyy"
        desc = "EEEE, M/d/y";
        break;
      case 1:
        // "mm/dd/yy"
        desc = "EEEE, M/d/yy";
          break;
      case 2:
        // "dd/mm/yyyy"
        desc = "EEEE, d/M/y";
        break;
      case 3:
        // "dd/mm/yy"
        desc = "EEEE, d/M/yy";
        break;
      case 4:
        // "yyyy/mm/dd"
        desc = "EEEE, y/M/d";
        break;
      case 5:
        // "yy/mm/dd"
        desc = "EEEE, yy/M/d";
        break;
      default: desc = "?";
    }
    return desc;
  }

  /** Returns the time format display to be used in the pipe of the time */
  timeFormatDisplay(timeformat: number): string {
    let desc = "";
    if (timeformat === 0) {
      // "am/pm"
      desc = "h:mm:ss a";
    } else {
      // "military"
      desc = "H:mm";
    }
    return desc;
  }

}
