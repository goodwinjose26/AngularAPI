import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usdata',
  templateUrl: './usdata.component.html',
  styleUrls: ['./usdata.component.css']
})
export class UsdataComponent {
  constructor (private api:ApiService)
  {
    api.fetchUsdata().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]

}


