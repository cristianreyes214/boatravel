import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabasesService {

  URL = 'http://localhost/boatravel-app/src/Funciones_php/';

  constructor(private http: HttpClient) { }
// servicio particular que se conecta al PHP y posteriormente a la base de datos.
loginDataProveedor(loginProveedor){
  return this.http.post(`${this.URL}Login_Proveedor.php`, JSON.stringify(loginProveedor));
}
  InsertDateHotel(formData){
  return this.http.post(`${this.URL}Insert_hotel.php`, formData);
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
  ///////////////////////////////////////////////// habitacio
  showDataRoom() {
    return this.http.get(`${this.URL}Show_Room.php`);
  }
  showOneDataRoom(variable) {
    return this.http.post(`${this.URL}Show_One_Room.php`, JSON.stringify(variable));
  }
  insertDataRoom(registerRoom){
    return this.http.post(`${this.URL}Insert_Room.php`, JSON.stringify(registerRoom));
  }
  deleteDataRoom(deleteRoom){
    return this.http.post(`${this.URL}Delete_room.php`, JSON.stringify(deleteRoom));
  }
  updateDataRoom(registerRoom){
    return this.http.post(`${this.URL}Update_room.php`, JSON.stringify(registerRoom));
  }
  ////////////////////////////////////////////////// buscador
  lookForDataHotel(lookForHotel){
    return this.http.post(`${this.URL}LookFor_Hotel.php`, JSON.stringify(lookForHotel));
  }
  buscadorHabitaciones123(lookForHotel){
    return this.http.post(`${this.URL}LookFor_Room.php`, JSON.stringify(lookForHotel));
  }
  buscadorArregloHabitacion(variable){
    return this.http.post(`${this.URL}Disponibility_Room.php`, JSON.stringify(variable));
  }
  updateArrayRoom(arregloEnvio){
    alert("scv   "+ (JSON.stringify(arregloEnvio))); 
    return this.http.post(`${this.URL}Update_Array_Room.php`, JSON.stringify(arregloEnvio));
    
  }

}
