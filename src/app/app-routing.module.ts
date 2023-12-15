import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ConfigurationComponent } from './components/main-page/configuration/configuration.component';
import { UserManagementComponent } from './components/main-page/user-management/user-management.component';
import { PunchScreenComponent } from './components/main-page/punch-screen/punch-screen.component';
import { PunchHistoryComponent } from './components/main-page/punch-history/punch-history.component';
import { SendMessagesComponent } from './components/main-page/send-messages/send-messages.component';
import { ViewMessagesComponent } from './components/main-page/view-messages/view-messages.component';
import { ViewTotalHoursComponent } from './components/main-page/view-total-hours/view-total-hours.component';


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
	{ path: 'configuration', component: ConfigurationComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'punch-screen', component: PunchScreenComponent },
  { path: 'punch-history', component: PunchHistoryComponent },
  { path: 'view-total-hours', component: ViewTotalHoursComponent },
  { path: 'send-messages', component: SendMessagesComponent },
  { path: 'view-messages', component: ViewMessagesComponent },
    // redirect to `home` if there is no path
    {
      path: '',
      redirectTo: 'punch-screen',
      pathMatch: 'full',
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
