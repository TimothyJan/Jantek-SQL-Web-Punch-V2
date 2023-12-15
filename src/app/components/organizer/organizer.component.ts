import { Component, OnInit } from '@angular/core';
import { JantekService } from '../../services/jantek.service';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrl: './organizer.component.css'
})
export class OrganizerComponent implements OnInit{
  isAuthenticated: boolean = false;
  _authSubscription: any;

  constructor(
    private _jantekService: JantekService
  ) {};

  ngOnInit(): void {
    // this.isAuthenticated = this._jantekService.isAuthenticated;
    this._authSubscription = this._jantekService.isAuthenticatedChange.subscribe((value) => {
      this.isAuthenticated = value;
    });
  }

  ngOnDestroy() {
    this._authSubscription.unsubscribe();
  }
}
