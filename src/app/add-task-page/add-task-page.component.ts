import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-task-page',
  templateUrl: './add-task-page.component.html',
  styleUrls: ['./add-task-page.component.css']
})
export class AddTaskPageComponent {

  empId=""
  taskName=""
  taskStatus=""

  constructor(private api:ApiService){}

  AddTask=()=>
  {

    let data:any={
      "empId":this.empId,
      "taskName":this.taskName,
      "taskStatus":this.taskStatus
    }

    console.log(data)

    this.api.AddTask(data).subscribe(

      (response:any)=>
      {

        console.log(response)

        if(response.status=="success")
        {
            alert("Task added successfully!")
            this.empId=""
            this.taskName=""
            this.taskStatus=""

        }
        else
        {
          alert("Failed to add Task")
          
        }


      }

    )


  }

}
