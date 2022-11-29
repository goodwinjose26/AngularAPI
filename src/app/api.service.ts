import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchPassenger =()=>
  {
    return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30")
  }
  fetchProduct =()=>
  {
    return this.http.get("https://dummyjson.com/products")
  }
  fetchTodo =()=>
  {
    return this.http.get("https://dummyjson.com/todos")
  }
  fetchUsdata =()=>
  {
    return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  }
  fetchUserdata =()=>
  {
    return this.http.get("https://dummyjson.com/users")
  }
  fetchUserinfo =()=>
  {
    return this.http.get("https://reqres.in/api/users?page=1")
  }
  fetchQutoe =()=>
  {
    return this.http.get("https://dummyjson.com/quotes")
  }
}
