import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  constructor (private api:ApiService)
  {
    api.fetchProduct().subscribe(
      (response2)=>
      {
        this.data=response2;
      }
    )
  }
  data:any=[]

}