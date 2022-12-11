import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-login-page',
  templateUrl: './employee-login-page.component.html',
  styleUrls: ['./employee-login-page.component.css']
})
export class EmployeeLoginPageComponent {


  emailId=""
  password=""


  employeeLoginCheck=()=>
  {
    let data:any={"emailId":this.emailId,"password":this.password}

    console.log(data)

    
  }

}
