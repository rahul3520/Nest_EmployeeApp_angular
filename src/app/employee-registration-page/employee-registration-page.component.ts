import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-registration-page',
  templateUrl: './employee-registration-page.component.html',
  styleUrls: ['./employee-registration-page.component.css']
})
export class EmployeeRegistrationPageComponent {

  name=""
  dob=""
  phoneNo=""
  address=""
  emailId=""
  password=""

  constructor(private api:ApiService){}

  EmployeeRegister=()=>
  {
    let data:any={
      "name":this.name,
      "dob":this.dob,
      "phoneNo":this.phoneNo,
      "address":this.address,
     "emailId":this.emailId,
     "password":this.password
    }

    console.log(data)

    this.api.EmployeeRegistration(data).subscribe(
      
      (response:any)=>
      {
        console.log(response)

        if(response.status=="success")
        {
          alert("Employee Registered successfully!")
          
          this.name=""
          this.dob=""
          this.phoneNo=""
          this.address=""
          this.emailId=""
          this.password=""

        }
        else
        {
          alert("Failed to register Employee")
        }


      }
    )

  }
}
