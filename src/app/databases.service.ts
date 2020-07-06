import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabasesService {

  URL = 'http://localhost/boatravel-app/src/Funciones_php/';
  constructor(private http: HttpClient) { }
// servicio particular que se conecta al PHP y posteriormente a la base de datos.
  InsertDateHotel(registerHotel){
   // return this.http.post(`${this.URL}Insert_hotel.php`, JSON.stringify(registerHotel));
  }
  // servicio particular que se conecta al PHP y posteriormente a la base de datos.
  showHotel(){
    return this.http.get(`${this.URL}Select_hotel.php`);
  }

  deleteDataHotel(deleteHotel){
    return this.http.post(`${this.URL}Delete_hotel.php`, JSON.stringify(deleteHotel));
  }
  updateDataHotel(registerHotel){
    return this.http.post(`${this.URL}Update_hotel.php`, JSON.stringify(registerHotel));
  }

}
