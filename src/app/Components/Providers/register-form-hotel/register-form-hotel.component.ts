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
  loginProveedor: FormGroup;
  getLoginProveedor: any = [];
  datos = 'fracaso';
  active: boolean;

///////////////////////////////////////////////// habitacion

registerRoom: FormGroup;
dataRoom: any = [];
lookForHotel: FormGroup;
dataHotelSeeker: any = [];
lista = [ 'hola ', 'que', 'tal', 'estas'];
ubicacion = 'ñk';
ubicacion2 = 'ñk';
final = '';
habitacion123: any = [];
prueva: FormGroup;
// filtroHabitacion: any = [];

// Se instancia en el constructor una variable que sea del tipo de las importaciones realizadas para poder usarlas
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private databasesService: DatabasesService) { }

  // Aqui se instancia de manera inmedita los elementos del componente que estan dentro de la instancia (similar al update de Unity)
  ngOnInit(): void {
    this.active  = false;
    this.searchHotel = this.formBuilder.group({});
    this.loginProveedor = this.formBuilder.group({
      userProveedor: [''],
      passwordProveedor: ['']
    });
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
///////////////////////////////////////////////// habitacion

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

  loginProvedorButton(){
    this.loginProveedorFuntion();

  }

  loginProveedorFuntion(){
    this.databasesService.loginDataProveedor(this.loginProveedor.value).subscribe(
      datos => {
        if (datos === 'exito') {
          this.active = true;
        }else{
          this.active = false;
        }
        alert(this.active);
      }
    );
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
*/
   

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// habitacion
  addRoomButton() {
    this.addDataRoom();
  }
  showRoomButton() {
    this.showDataRoom();
  }
  lookForHotelButton() {
    this.lookForDataHotel();

  }
  showDataRoom() {
    this.databasesService.showDataRoom().subscribe(
      dataRoom => {
        this.dataRoom.push(dataRoom);
      });
  }
  addDataRoom() {
    this.databasesService.insertDataRoom(this.registerRoom.value).subscribe();
  }
  lookForDataHotel(){
    this.dataHotelSeeker = [];
    this.databasesService.lookForDataHotel(this.lookForHotel.value).subscribe(
      dataHotelSeeker => {
        this.dataHotelSeeker.push(dataHotelSeeker);
      }
    );
    this.ubicacion = (document.getElementById('dateStartTravel') as HTMLInputElement).value;
    // his.ubicacion2 = (document.getElementById('dateEndTravel') as HTMLInputElement).value;
    // this.final = this.ubicacion.concat(",  ", this.ubicacion2) ;
    // alert(this.final);
  }
  johann(){
    this.lookForHotel = this.formBuilder.group({
      idHotel: [(document.getElementById('idHotel123') as HTMLInputElement).value],
      numberPeople: [(document.getElementById('numberPeople') as HTMLInputElement).value],
      dateStartTravel: [(document.getElementById('dateStartTravel') as HTMLInputElement).value],
      dateEndTravel: [(document.getElementById('dateEndTravel') as HTMLInputElement).value]
   });

    this.ubicacion = (document.getElementById('idHotel123') as HTMLInputElement).value;
    // this.ubicacion2 = JSON.stringify(this.ubicacion)
    this.databasesService.buscadorHabitaciones123(this.lookForHotel.value).subscribe(
      habitacion123 => {
        this.habitacion123.push(habitacion123);
        
      }
    );
    
  }   

}
