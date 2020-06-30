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

}
