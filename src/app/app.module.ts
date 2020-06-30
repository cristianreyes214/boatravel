import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PprofileComponent } from './Components/Providers/Providers-Profile/pprofile.component';
import { HotelComponentComponent } from './Components/Providers/hotel-component/hotel-component.component';
import { RegisterFormHotelComponent } from './Components/Providers/register-form-hotel/register-form-hotel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatabasesService } from './databases.service';


@NgModule({
  declarations: [
    AppComponent,
    PprofileComponent,
    HotelComponentComponent,
    RegisterFormHotelComponent
  ],
  imports: [
    BrowserModule,
    // declaramos las librerias
    AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule
  ],
  // declaramos las la bolsa de servicios
  providers: [DatabasesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
