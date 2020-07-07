import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabasesService {

  URL = 'http://localhost/API/';
  constructor(private http: HttpClient) { }
// servicio particular que se conecta al PHP y posteriormente a la base de datos.
  InsertDateHotel(registerHotel){
    return this.http.post(`${this.URL}Insertardatos.php`, JSON.stringify(registerHotel));
  }
  // servicio particular que se conecta al PHP y posteriormente a la base de datos.
  showHotel(){
    return this.http.get(`${this.URL}mostrar.php`);
  }

  deleteDataHotel(deleteHotel){
    return this.http.post(`${this.URL}Eliminar.php`, JSON.stringify(deleteHotel));
  }
  updateDataHotel(registerHotel){
    return this.http.post(`${this.URL}Actualizar.php`, JSON.stringify(registerHotel));
  }
  loginDataProveedor(loginProveedor){
    return this.http.post(`${this.URL}loginProveedor.php`, JSON.stringify(loginProveedor));
  }
  ///////////////////////////////////////////////// habitacio
  showDataRoom(){
    return this.http.get(`${this.URL}mostrarHabitacion.php`);
  }
  insertDataRoom(registerRoom){
    return this.http.post(`${this.URL}InsertarDatosHabitacion.php`, JSON.stringify(registerRoom));
  }
  lookForDataHotel(lookForHotel){
    return this.http.post(`${this.URL}BuscarHoteles.php`, JSON.stringify(lookForHotel));
  }
  buscadorHabitaciones123(lookForHotel){
    return this.http.post(`${this.URL}BuscadorHabitaciones123.php`, JSON.stringify(lookForHotel));
  }

}
