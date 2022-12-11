import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLogoutbarComponent } from './admin-logoutbar/admin-logoutbar.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { EmployeeLoginPageComponent } from './employee-login-page/employee-login-page.component';
import { EmployeeRegistrationPageComponent } from './employee-registration-page/employee-registration-page.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginPageComponent
  },
  {
    path:"employeeLogin",
    component:EmployeeLoginPageComponent
  },
  {
    path:"employeeRegistration",
    component:EmployeeRegistrationPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLogoutbarComponent,
    AdminLoginPageComponent,
    EmployeeLoginPageComponent,
    EmployeeRegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
