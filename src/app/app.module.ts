import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { FooterComponent } from './components/footer/footer.component';
import { OrganizerComponent } from './components/organizer/organizer.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LogoWelcomeComponent } from './components/login-page/logo-welcome/logo-welcome.component';

import { NavBarComponent } from './components/main-page/nav-bar/nav-bar.component';
import { ConfigurationComponent } from './components/main-page/configuration/configuration.component';
import { UserManagementComponent } from './components/main-page/user-management/user-management.component';
import { AddUserComponent } from './components/main-page/user-management/add-user/add-user.component';
import { DeleteUserComponent } from './components/main-page/user-management/delete-user/delete-user.component';
import { ChangePasswordComponent } from './components/main-page/user-management/change-password/change-password.component';
import { ModifyRightsComponent } from './components/main-page/user-management/modify-rights/modify-rights.component';
import { DateTimeComponent } from './components/date-time/date-time.component';
import { PunchScreenComponent } from './components/main-page/punch-screen/punch-screen.component';
import { PunchHistoryComponent } from './components/main-page/punch-history/punch-history.component';
import { SendMessagesComponent } from './components/main-page/send-messages/send-messages.component';
import { ViewMessagesComponent } from './components/main-page/view-messages/view-messages.component';
import { ViewTotalHoursComponent } from './components/main-page/view-total-hours/view-total-hours.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    OrganizerComponent,
    LoginFormComponent,
    LoginPageComponent,
    LogoWelcomeComponent,
    NavBarComponent,
    ConfigurationComponent,
    UserManagementComponent,
    AddUserComponent,
    DeleteUserComponent,
    ChangePasswordComponent,
    ModifyRightsComponent,
    DateTimeComponent,
    PunchScreenComponent,
    PunchHistoryComponent,
    SendMessagesComponent,
    ViewMessagesComponent,
    ViewTotalHoursComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
