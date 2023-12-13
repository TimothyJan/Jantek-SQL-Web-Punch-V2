import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertService } from './alert.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CompanyInfo } from '../models/company-info';
import { PunchConfig } from '../models/punch-config';
import { Punch } from '../models/punch';

const baseUri = "http://201.12.20.40/timothy_jan/webpunch/wp_getinfo.asp?Company=TIMOTHYJANPROJECT";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    'Accept': 'application/json',
    "Access-Control-Allow-Origin": "http://localhost:4200/",
    'Access-Control-Allow-Methods': "GET,POST,OPTIONS,DELETE,PUT"
  })
}

@Injectable({
  providedIn: 'root'
})
export class JantekService {
  isAuthenticated: boolean = false;
  isAuthenticatedChange: Subject<boolean> = new Subject<boolean>();

  companyInfo: CompanyInfo;
  punchConfig: PunchConfig;

  /** DEMO ONLY */
  demoUserName:string = "202";
  demoUserPassword:string = "202";
  demoAdminName:string = "201";
  demoAdminPassword:string = "201"
  /** DEMO ONLY */

  constructor(
    private _alertService: AlertService,
    private http: HttpClient
    ) { }

  /** Check user in database and login*/
  login(form: any): boolean {
    /* Check if user in database */
    if(form.username == this.demoAdminName && form.password == this.demoAdminPassword) {
      this.isAuthenticatedChange.next(true);
      this._alertService.openSnackBar("Login Successful");
      this.getCompanyInfo();
      return true;
    }
    this._alertService.openSnackBar("Incorrect Login");
    return false;
  }

  /** Log Off */
  logoff() {
    this.isAuthenticatedChange.next(false);
    this._alertService.openSnackBar("Logoff Successful");
  }

  /** Https request to gets company info from server */
  getCompanyInfo() {
    // DEMO ONLY
    this.companyInfo =
    {
      status: "OK",
      companyname: "Timothy Jan",
      lvl1label: "Company",
      lvl2label: "Branch",
      lvl3label: "Department",
      lvl3labelshort: "Dept.",
      dateformat: 0,
      timeformat: 0,
      orient: 0,
      size: 1,
      wkstart: 2,
      memfore: 134217728,
      memback: 67108864
    }
  }

  /** ---------- CONFIGURATION ---------- */
  /** Update Configuration */
  updateConfiguration(form: any) {
    console.log(form);
    this._alertService.openSnackBar("Configuration Updated!");
  }

  /** ---------- USER MANAGEMENT ---------- */
  /** Add user*/
  addUser(form: any) {
    console.log(form);
    this._alertService.openSnackBar("User Added!");
  }

  /** Delete user */
  deleteUser(form:any){
    console.log(form);
    this._alertService.openSnackBar("User Deleted!");
  }

  /** Change password */
  changePassword(form:any) {
    console.log(form);
    this._alertService.openSnackBar("Password Changed!");
  }

  /** Modify rights */
  modifyRights(form:any) {
    console.log(form);
    this._alertService.openSnackBar("Rights Modified!");
  }

  /** ---------- PUNCH SCREEN ---------- */
  /** Get Punch Conifiguration */
  getPunchConfiguration() {

  }

  /** Returns the DateFormat for date-time */
  getDateFormat() {
    return this.companyInfo.dateformat;
  }

  /** Returns the TimeFormat for date-time*/
  getTimeFormat() {
    return this.companyInfo.timeformat;
  }

  /** Https request clockType */
  getPunchConfig() {
    this.punchConfig = {
      "status": "OK",
      "logintype": 1,
      "clocktype": 1,
      "checklo": 0,
      "fk1": {
          "fktype": 18,
          "caption": "View Last Punch",
          "msg1": "",
          "msg2": "",
          "msg3": "",
          "PC": 0
      },
      "fk2": {
          "fktype": 19,
          "caption": "View Total Hour",
          "msg1": "",
          "msg2": "",
          "msg3": "",
          "PC": 0
      },
      "fk3": {
          "fktype": 5,
          "caption": "Company Change",
          "msg1": "Enter Company",
          "msg2": "",
          "msg3": "",
          "PC": 0
      },
      "fk4": {
          "fktype": 6,
          "caption": "Branch Change",
          "msg1": "Enter Branch",
          "msg2": "",
          "msg3": "",
          "PC": 0
      },
      "fk5": {
          "fktype": 7,
          "caption": "Dept Change",
          "msg1": "Enter Department",
          "msg2": "",
          "msg3": "",
          "PC": 0
      },
      "fk6": {
          "fktype": 17,
          "caption": "Tip Entry",
          "msg1": "Enter Tip",
          "msg2": "",
          "msg3": "",
          "PC": 7
      }
    }
  }

  /** Get Clock Type */
  getClockType() {
    return this.punchConfig.clocktype;
  }

  /** Punch In/Out/SwipeAndGo */
  punchScreen(form: any) {
    console.log(form);
    this._alertService.openSnackBar("Punch Recorded!");
  }

  /** ---------- PUNCH HISTORY ---------- */
  /** Get Punch History */
  getPunchHistory(form: any) {
    console.log(form);
  }

  /** ---------- SEND MESSAGES ---------- */
  sendMessages(form: any) {
    console.log(form);
    this._alertService.openSnackBar("Message Sent!");
  }

  /** ---------- VIEW MESSAGES ---------- */
  viewMessages(form: any) {
    console.log(form);
  }
}
