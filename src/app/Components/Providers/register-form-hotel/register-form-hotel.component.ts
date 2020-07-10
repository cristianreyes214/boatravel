import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatabasesService } from '../../../databases.service';

@Component({
  selector: 'app-register-form-hotel',
  templateUrl: './register-form-hotel.component.html',
  styleUrls: ['./register-form-hotel.component.css']
})

export class RegisterFormHotelComponent implements OnInit {

  // Declaración de las variables;
  dataHotel: any = [];
  searchHotel: FormGroup;
  registerHotel: FormGroup;
  deleteHotel: FormGroup;
  searchForm: FormGroup;
  bookingForm: FormGroup;

// Se instancia en el constructor una variable que sea del tipo de las importaciones realizadas para poder usarlas
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private databasesService: DatabasesService) {}

  // Aqui se instancia de manera inmedita los elementos del componente que estan dentro de la instancia (similar al update de Unity)
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
      file: [''],
      fileSource: [''],
      addressHotel: [''],
      fkCompany: ['']
    });
    this.searchForm = this.formBuilder.group({
      fechaIni: [''],
      fechaFin: ['']
    });
    this.bookingForm = this.formBuilder.group({
      checkIn: [''],
      checkOut: ['']
    });
  }

  // Funciones para obtener información de la imagen que tiene un id file y comprobar que se enviá algo y no un obj vacio.
  get f(){
    return this.registerHotel.controls;
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registerHotel.patchValue({
        fileSource: file
      });
    }
  }

// Método para añadir nuevo hotel, con el botón AddHotelButton
  addHotelButton() {
  const formData = new FormData();
  // append es un método de FormData para agregar un valor nuevo al final del conjunto de valores
  formData.append('idHotel', this.registerHotel.value.idHotel);
  formData.append('nameHotel', this.registerHotel.value.nameHotel);
  formData.append('locationHotel', this.registerHotel.value.locationHotel);
  formData.append('telHotel', this.registerHotel.value.telHotel);
  formData.append('tel2', this.registerHotel.value.tel2);
  formData.append('descHotel', this.registerHotel.value.descHotel);
  formData.append('file', this.registerHotel.get('fileSource').value);
  formData.append('addressHotel', this.registerHotel.value.addressHotel);
  formData.append('fkCompany', this.registerHotel.value.fkCompany);
  //this.InsertDateHotel();

  return this.http.post('http://localhost/boatravel-app/src/Funciones_php/Insert_hotel.php', formData).subscribe((res: Response) =>
    {
      alert('Hotel añadido exitosamente');
    });
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

/* metodo que se conecta con el servicio
  InsertDateHotel() {

    // llamamos un servicio en particular  y nos subscribimos para acceder a la informacion que trae la conexion con la DB
     this.databasesService.InsertDateHotel(this.registerHotel.value).subscribe(
      (res: Response) => {
          console.log("epa");
      });
   }
----------------------------------------------------------------------------------------- */
  //Variables

  //Variables del buscador
  fechaIni1 = 0;
  fechaFin1 = 0;
  resultado1 = 0;

  //Variables de la habitación
  fechaIni2 = 0;
  fechaFin2 = 0;
  resultado2 = 0;

  searching(){
    this.fechaIni1 = new Date(this.searchForm.value.fechaIni).getTime();
    this.fechaFin1 = new Date(this.searchForm.value.fechaFin).getTime();
    this.resultado1 = ((this.fechaFin1 - this.fechaIni1)/(1000*60*60*24));
    const fechaInicioBuscador = ((this.fechaIni1) / (1000*60*60*24));
    const fechaFinBuscador = ((this.fechaFin1) / (1000*60*60*24));
    //const fechasBuscador = new Array(fechaInicioBuscador, fechaFinBuscador);
    this.buscarDisponibilidad(this.fechaIni1);
    return this.fechaFin1;
  }

  buscarDisponibilidad(fechaInicio: number) {
    this.fechaIni2 = new Date(this.bookingForm.value.checkIn).getTime();
    this.fechaFin2 = new Date(this.bookingForm.value.checkOut).getTime();
    this.resultado2 = ((this.fechaFin2 - this.fechaIni2) / (1000 * 60 * 60 * 24));

    const Disponibilidad = "Disponible";
    const arreglo = new Array(this.resultado2);

    let i ;
    let b ;

    for (i = 0; i < arreglo.length; i++){
      arreglo[i] = Disponibilidad;
    }

    //arreglo [5] = "checkIn";

    const posicion1 = ((fechaInicio - this.fechaIni2) / (1000 * 60 * 60 * 24));
    const posicion2 = ((this.fechaFin1 - this.fechaIni2) / (1000 * 60 * 60 * 24));
    const tamanoP = posicion2 - posicion1;
    console.log(tamanoP);


    for (i = posicion1; posicion2 > i; i++){
      if ((arreglo[i] == "Disponible") || (arreglo[i] == "checkOut")){
        if (tamanoP === 1){
            //arreglo[i-1] = "Check in";
          arreglo[i] = "Check In";
          arreglo[i+1] = "Check Out";
          alert("Se reservo");
        }
        else if (tamanoP > 1){
          arreglo[posicion1] = "Check In";
          arreglo[posicion2] = "Check Out";
          if ((i !== posicion1) && (i !== posicion2)){
            arreglo[i] = "Ocupado";
          }
        }
      }
      else{
        alert("No esta disponible");
      }
    }
    console.log(arreglo);
    }



}



