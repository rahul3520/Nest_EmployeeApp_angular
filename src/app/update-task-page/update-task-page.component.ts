import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-task-page',
  templateUrl: './update-task-page.component.html',
  styleUrls: ['./update-task-page.component.css']
})
export class UpdateTaskPageComponent {

  searchData:any=[]

  constructor(private api:ApiService){

    let data:any={"empId":localStorage.getItem("empInfo")}

    console.log(data)

    this.api.ViewMyTasks(data).subscribe(

      (response:any)=>
      {
        console.log(response)
        
        this.searchData=response

      }


    )

  }

  taskName=""
  taskStatus=""

  UpdateStatus=()=>
  {
    let data:any={

      "empId":localStorage.getItem("empInfo"),
      "taskName":this.taskName,
      "taskStatus":this.taskStatus
    }

    console.log(data)

    this.api.ModifyTaskStatus(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status=="success")
        {
          alert("Task status is updated")
        }
        else
        {
          alert("Failed to update task")
        }
      }
    )

  }

}
