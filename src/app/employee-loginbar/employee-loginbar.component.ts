import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-loginbar',
  templateUrl: './employee-loginbar.component.html',
  styleUrls: ['./employee-loginbar.component.css']
})
export class EmployeeLoginbarComponent {


  empid:any=""

  constructor(){

    this.empid=localStorage.getItem("empInfo")
  }

  RemoveID=()=>
  {
    localStorage.removeItem("empInfo")
    localStorage.clear
  }

}
