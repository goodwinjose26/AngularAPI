import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerdataComponent } from './passengerdata/passengerdata.component';
import { UsdataComponent } from './usdata/usdata.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UserdataComponent } from './userdata/userdata.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http'
const myRoute:Routes=[
  {
    path:"",
    component:PassengerdataComponent
    
  },
  {
    path:"usdata",
    component:UsdataComponent
  },
  {
    path:"userinfo",
    component:UserinfoComponent
  },
  {
    path:"productlist",
    component:ProductlistComponent
  },
  {
    path:"userdata",
    component:UserdataComponent
  },
  {
    path:"todo",
    component:TodoComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    PassengerdataComponent,
    UsdataComponent,
    NavbarComponent,
    UserinfoComponent,
    ProductlistComponent,
    UserdataComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
