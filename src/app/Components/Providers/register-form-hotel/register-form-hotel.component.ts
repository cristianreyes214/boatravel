import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
// importamos la libreria httpclient y el servicio databases
import { HttpClient } from '@angular/common/http';
import { DatabasesService } from '../../../databases.service';


@Component({
  selector: 'app-register-form-hotel',
  templateUrl: './register-form-hotel.component.html',
  styleUrls: ['./register-form-hotel.component.css']
})

export class RegisterFormHotelComponent implements OnInit {

  // declaramos las variables;

  dataHotel: any = [];
  searchHotel: FormGroup;
  registerHotel: FormGroup;
  deleteHotel: FormGroup;

// se instancia en el constructor una variable que sea del tipo de las importaciones realizadas para poder usarlas
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private databasesService: DatabasesService) { }
// aqui se instancia de manera inmedita los elementos del componente que estan dentro de la instancia (similar al update de Unity)
  ngOnInit(): void {
    this.searchHotel = this.formBuilder.group({});
    this.deleteHotel = this.formBuilder.group({
      IDDHotel: ['']
    });
    this.registerHotel = this.formBuilder.group({
      idHotel: [''],
      nameHotel: [''],
      locationHotel: [''],
      telHotel: [''],
      tel2: [''],
      descHotel: [''],
      photoHotel: [''],
      addressHotel: [''],
      fkCompany: ['']
    });
  }
// metodo que llama determinado boton
  addHotelButton() {

     this.InsertDateHotel();
  }
  // metodo que llama determinado boton
  showHotelButton(){

    this.showHotel();
  }

  deleteHotelButton(){

    this.deleteHotelFuntion();
  }

  updateHotelButton(){
    this.updateHotelFuntion();
  }

  updateHotelFuntion(){
    this.databasesService.updateDataHotel(this.registerHotel.value).subscribe();
    alert('actualizar');
  }

  deleteHotelFuntion(){
    this.databasesService.deleteDataHotel(this.deleteHotel.value).subscribe();
    alert( 'eliminar' );
  }
// metodo que se conecta con la bolsa de servicios
  showHotel(){
    // llamamos un servicio en particular  y nos subscribimos para acceder a la informacion que trae la conexion con la DB
    this.databasesService.showHotel().subscribe(
      dataHotel => {
        this.dataHotel.push(dataHotel);
      });
    alert('mostrar');
  }

// metodo que se conecta con el servicio
  InsertDateHotel() {
    // llamamos un servicio en particular  y nos subscribimos para acceder a la informacion que trae la conexion con la DB
     this.databasesService.InsertDateHotel(this.registerHotel.value).subscribe(
       datos => {
         if (datos[' resultado '] === 'OK') {
          alert(datos[' mensaje']);
         }
       }
     );

   }

}
