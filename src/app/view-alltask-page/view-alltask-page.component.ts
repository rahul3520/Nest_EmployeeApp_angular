import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-alltask-page',
  templateUrl: './view-alltask-page.component.html',
  styleUrls: ['./view-alltask-page.component.css']
})
export class ViewAlltaskPageComponent {

  searchData:any=[]

  constructor(private api:ApiService){

    this.api.ViewAllTasks().subscribe(


      (response:any)=>
      {
        console.log(response)

        this.searchData=response

      }
    )

  }

}
