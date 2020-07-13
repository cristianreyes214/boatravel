import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatabasesService } from '../../../databases.service';
//import { variable } from '@angular/compiler/src/output/output_ast';

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
  loginProveedor: FormGroup;
  getLoginProveedor: any = [];
  datos = 'fracaso';
  active: boolean;
  variable: any = '';

  //////////////////////////////////////////////// buscador
  dateStartSearch = 0;
  dateEndSearch = 0;
  result1 = 0;
  dateStartRoom = 0;
  dateEndRoom = 0;
  result2 = 0;
  reservaHabitacion: any = [];


///////////////////////////////////////////////// habitacion

registerRoom: FormGroup;
dataRoom: any = [];
lookForHotel: FormGroup;
dataHotelSeeker: any = [];
ubicacion = 'ñk';
ubicacion2 = 'ñk';
final = '';
habitacion123: any = [];
arrayRoom: any = [];
prueva: FormGroup;
filtroHabitacion: any = [];
searchForm: FormGroup;
bookingForm: FormGroup;


// Se instancia en el constructor una variable que sea del tipo de las importaciones realizadas para poder usarlas
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private databasesService: DatabasesService) {}

// Aqui se instancia de manera inmedita los elementos del componente que estan dentro de la instancia (similar al update de Unity)
  ngOnInit(): void {
    this.searchHotel = this.formBuilder.group({});
    this.active  = false;
    this.loginProveedor = this.formBuilder.group({
      userProveedor: [''],
      passwordProveedor: ['']
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
    this.registerRoom = this.formBuilder.group({
      idRoom: [''],
      capacityRoom: [''],
      Checkout: [''],
      dateStartRoom: [''],
      dateEndRoom: [''],
      Checkin: [''],
      drescriptionRoom: [''],
      priceRoom: [''],
      StateRoom: [''],
      hotelReference: ['']
    });
    this.lookForHotel = this.formBuilder.group({
      place: [''],
      numberPeople: [''],
      dateStartTravel: [''],
      dateEndTravel: ['']
    });
    this.deleteHotel = this.formBuilder.group({
      IDDHotel: ['']
    });
  }
  loginProvedorButton(){
    this.databasesService.loginDataProveedor(this.loginProveedor.value).subscribe(
      datos => {
        if (datos === 'exito') {
          this.active = true;
          alert('Ha iniciado sesion exitosamente');
        }else{
          this.active = false;
          alert('Su usuario o contraseña es incorrecto');
        }
      }
    );

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
  this.databasesService.InsertDateHotel(formData).subscribe((res: Response) =>
    {
      alert('Hotel añadido exitosamente');
    });
  }
  updateHotelButton() {
    if (!this.registerHotel.value.idHotel || !this.registerHotel.value.nameHotel || !this.registerHotel.value.locationHotel ||
      !this.registerHotel.value.telHotel || !this.registerHotel.value.tel2 || !this.registerHotel.value.descHotel ||
      !this.registerHotel.value.addressHotel || !this.registerHotel.value.fkCompany) {
      alert('Completa todos los recuadros');
    } else {
      this.databasesService.updateDataHotel(this.registerHotel.value).subscribe();
      alert('El hotel se ha actualizado con exito');
    }
  }
  // metodo que llama determinado boton
  showHotelButton(){
    this.databasesService.showHotel().subscribe(
      dataHotel => {
        this.dataHotel.push(dataHotel);
      });
    setTimeout(() => { alert('Se han mostrado todos los hoteles con exito'); }, 500);


  }
  addRoomButton() {
    this.dateStartRoom = new Date(this.registerRoom.value.dateStartRoom).getTime();
    this.dateEndRoom = new Date(this.registerRoom.value.dateEndRoom).getTime();
    this.result2 = ((this.dateEndRoom - this.dateStartRoom) / (1000 * 60 * 60 * 24));


    const Disponibilidad = 'Disponible';
    const arreglo = new Array(this.result2);

    let i;

    for (i = 0; i < arreglo.length; i++) {
      arreglo[i] = Disponibilidad;
    }

    const variable22 = JSON.stringify(arreglo[5]);
    this.registerRoom = this.formBuilder.group({
      idRoom: [this.registerRoom.value.idRoom],
      capacityRoom: [this.registerRoom.value.capacityRoom],
      dateStartRoom: [this.registerRoom.value.dateStartRoom],
      dateEndRoom: [this.registerRoom.value.dateEndRoom],
      Checkin: [this.registerRoom.value.Checkin],
      drescriptionRoom: [this.registerRoom.value.drescriptionRoom],
      priceRoom: [this.registerRoom.value.priceRoom],
      StateRoom: [this.registerRoom.value.StateRoom],
      hotelReference: [this.registerRoom.value.hotelReference],
      arrayRoom: [variable22]
    });

    alert(JSON.stringify(this.registerRoom.value));
    console.log(arreglo);
    this.databasesService.insertDataRoom(this.registerRoom.value).subscribe();












  }
  deleteHotelButton(){
    this.databasesService.deleteDataHotel(this.deleteHotel.value).subscribe();
    alert( 'El hotel se ha eliminado exitosamente' );
  }
  showRoomButton() {
    this.databasesService.showDataRoom().subscribe(
      dataRoom => {
        this.dataRoom.push(dataRoom);
      });
    alert('exitosamente');
  }
  lookForHotelButton() {
    this.dataHotelSeeker = [];
    this.databasesService.lookForDataHotel(this.lookForHotel.value).subscribe(
      dataHotelSeeker => {
        this.dataHotelSeeker.push(dataHotelSeeker);
      });
  }
  lookForRoomButton(variable) {
    this.lookForHotel = this.formBuilder.group({
      idHotel: [variable],
      numberPeople: [(document.getElementById('numberPeople') as HTMLInputElement).value],
      dateStartTravel: [(document.getElementById('dateStartTravel') as HTMLInputElement).value],
      dateEndTravel: [(document.getElementById('dateEndTravel') as HTMLInputElement).value]
    });

/*
    this.dateStartSearch = new Date(this.lookForHotel.value.dateStartSearch).getTime();
    this.dateEndSearch = new Date(this.lookForHotel.value.dateEndSearch).getTime();
    // this.buscarDisponibilidad();
   // return this.dateEndSearch , this.dateStartSearch;

*/
    this.databasesService.buscadorHabitaciones123(this.lookForHotel.value).subscribe(
      habitacion123 => {
        this.habitacion123.push(habitacion123);
      }
    );

    alert(JSON.stringify(variable));
  }


  lookForDisponibilityRoomButton(variable: any) {
    let arregloHabitacion: any;

    this.dateStartSearch = new Date(this.lookForHotel.value.dateStartSearch).getTime();
    this.dateEndSearch = new Date(this.lookForHotel.value.dateEndSearch).getTime();
    // this.buscarDisponibilidad();

    this.databasesService.buscadorArregloHabitacion(variable).subscribe(
      arreglo => {
        this.reservaHabitacion.push(arreglo);
      }
    );

    setTimeout(() => {
      arregloHabitacion = this.reservaHabitacion; alert(JSON.stringify(arregloHabitacion)); console.log(JSON.stringify(arregloHabitacion)); alert(JSON.stringify(Object.values(arregloHabitacion)));
    }, 500);





  }
 prueba(variable: any){

  const arreglo = new Array("johann","montoya","rubuano");
  alert(arreglo);
  console.log(arreglo);

 }
/*
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
    this.buscarDisponibilidad();
    return this.fechaFin1, this.fechaIni1;
  }

  buscarDisponibilidad(fechaInicio: number) {
    this.fechaIni2 = new Date(this.bookingForm.value.checkIn).getTime();
    this.fechaFin2 = new Date(this.bookingForm.value.checkOut).getTime();
    this.resultado2 = ((this.fechaFin2 - this.fechaIni2) / (1000 * 60 * 60 * 24));

    const Disponibilidad = ['Disponible'];
    const arreglo = new Array(this.resultado2);

    let i ;
    let b ;

    for (i = 0; i < arreglo.length; i++){
      arreglo[i] = Disponibilidad;
    }

    const posicion1 = (( this.fechaIni1 - this.fechaIni2) / (1000 * 60 * 60 * 24));
    const posicion2 = ((this.fechaFin1 - this.fechaIni2) / (1000 * 60 * 60 * 24));
    console.log(posicion1);
    console.log(posicion2);

    for (i = posicion1; posicion2 > i; i++){
      arreglo[i] = "Punto A";
    }
    console.log(arreglo);
    }


Envía un mensaje

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



