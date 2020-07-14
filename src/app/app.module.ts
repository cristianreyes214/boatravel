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
import { RouterModule, Routes } from '@angular/router';
import { SessionComponent } from './Components/Session/session.component';
import { RoomComponentComponent } from './Components/Providers/room-component/room-component.component';
import { RegisterFormRoomComponentComponent } from './Components/Providers/register-form-room-component/register-form-room-component.component';
import { SearcherComponent } from './Components/searcher/searcher.component';
import { DeleteHotelComponentComponent } from './Components/Providers/delete-hotel-component/delete-hotel-component.component';


@NgModule({
  declarations: [
    AppComponent,
    PprofileComponent,
    HotelComponentComponent,
    RegisterFormHotelComponent,
    SessionComponent,
    RoomComponentComponent,
    RegisterFormRoomComponentComponent,
    SearcherComponent,
    DeleteHotelComponentComponent,
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
