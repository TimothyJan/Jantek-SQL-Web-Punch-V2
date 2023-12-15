import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JantekService } from '../../../services/jantek.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  navLinks = [
    { path: '/punch-screen', label: 'Punch Screen' },
    { path: '/punch-history', label: 'Punch History' },
    { path: '/view-total-hours', label: 'View Total Hours' },
  ];

  private smallScreenThreshold = 1460;
  isSmallScreen = false;
  // Sidenav toggle flag
  isSidenavOpen = false;

  constructor(
    private router: Router,
    private _jantekService: JantekService
  ) {}

  ngOnInit(): void {
    if (this._jantekService.isAdmin) {
      this.navLinks = [
        { path: '/configuration', label: 'Configuration' },
        { path: '/user-management', label: 'User Management' },
        { path: '/punch-screen', label: 'Punch Screen' },
        { path: '/punch-history', label: 'Punch History' },
        { path: '/view-total-hours', label: 'View Total Hours' },
        { path: '/send-messages', label: 'Send Messages' },
        { path: '/view-messages', label: 'View Messages' },
      ];
    }

    // Initialize the flag on component creation
    this.checkScreenSize();
  }

  closeSideNav() {
    this.isSidenavOpen = false;
  }
  /** Toggle the Sidenav */
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  /** Navigate to the specified route and close the Sidenav */
  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeSideNav();
  }

  /** HostListener to update the flag on window resize */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
    this.closeSideNav();
  }

  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth < this.smallScreenThreshold;
  }

  isScreenSmall(): boolean {
    return this.isSmallScreen;
  }

  logoff() {
    this._jantekService.logoff();
    this.router.navigate(['/login']);
  }
}
