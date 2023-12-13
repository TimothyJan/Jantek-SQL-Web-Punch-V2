import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JantekService } from '../../../services/jantek.service';

@Component({
  selector: 'app-send-messages',
  templateUrl: './send-messages.component.html',
  styleUrl: './send-messages.component.css'
})
export class SendMessagesComponent {
  sendMessagesForm: FormGroup = new FormGroup({
    privateOrPublic: new FormControl("private", Validators.required),
    recipient: new FormControl({value: "", disabled: false}, Validators.required),
    title: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required)
  });

  constructor(
    private _jantekService: JantekService
  ) {}

  privateOrPublicChanged(event:any) {
    switch(event) {
      case "private":
        this.sendMessagesForm.controls["recipient"].enable();
        break;
      case "public":
        this.sendMessagesForm.controls["recipient"].disable();
        break;
      default:
        this.sendMessagesForm.controls["recipient"].enable();
        break;
    }
  }

  onSendMessages() {
    if (this.sendMessagesForm.valid) {
      this._jantekService.sendMessages(this.sendMessagesForm.value);
    }
  }
}
