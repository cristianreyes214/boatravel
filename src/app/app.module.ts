import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PprofileComponent } from './Components/Providers/Providers-Profile/pprofile.component';
import { HotelComponentComponent } from './Components/Providers/hotel-component/hotel-component.component';
import { RegisterFormHotelComponent } from './Components/Providers/register-form-hotel/register-form-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    PprofileComponent,
    HotelComponentComponent,
    RegisterFormHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
