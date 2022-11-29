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
  }
]
@NgModule({
  declarations: [
    AppComponent,
    PassengerdataComponent,
    UsdataComponent,
    NavbarComponent,
    UserinfoComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
