import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JantekService } from '../../../services/jantek.service';

@Component({
  selector: 'app-view-messages',
  templateUrl: './view-messages.component.html',
  styleUrl: './view-messages.component.css'
})
export class ViewMessagesComponent {
  viewMessagesForm: FormGroup = new FormGroup({
    user: new FormControl("", Validators.required)
  })
  displayedPrivateColumns: string[] = ["from", "date", "time", "title", 'status', "delete"];
  displayedPublicColumns: string[] = ["from", "date", "time", "title", "delete"];
  privateDataSource: string[] = [];
  publicDataSource: string[] = [];

  constructor(
    private _jantekService: JantekService
  ){}

  onSubmit() {
    if (this.viewMessagesForm.valid) {
      this._jantekService.getPunchHistory(this.viewMessagesForm.value);
    }
  }
}
