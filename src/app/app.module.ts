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
import { AdminLoginbarComponent } from './admin-loginbar/admin-loginbar.component';
import { EmployeeLoginbarComponent } from './employee-loginbar/employee-loginbar.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AddTaskPageComponent } from './add-task-page/add-task-page.component';
import { ViewAlltaskPageComponent } from './view-alltask-page/view-alltask-page.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { ViewMytaskComponent } from './view-mytask/view-mytask.component';
import { UpdateTaskPageComponent } from './update-task-page/update-task-page.component';

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
  },
  {
    path:"adminProfile",
    component:AdminProfileComponent
  },
  {
    path:"addTask",
    component:AddTaskPageComponent
  },
  {
    path:"viewallTasks",
    component:ViewAlltaskPageComponent
  },
  {
    path:"employeeProfile",
    component:EmployeeProfileComponent
  },
  {
    path:"viewmyTasks",
    component:ViewMytaskComponent
  },
  {
    path:"updateTaskstatus",
    component:UpdateTaskPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLogoutbarComponent,
    AdminLoginPageComponent,
    EmployeeLoginPageComponent,
    EmployeeRegistrationPageComponent,
    AdminLoginbarComponent,
    EmployeeLoginbarComponent,
    AdminProfileComponent,
    AddTaskPageComponent,
    ViewAlltaskPageComponent,
    EmployeeProfileComponent,
    ViewMytaskComponent,
    UpdateTaskPageComponent
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
