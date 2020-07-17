import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatabasesService } from '../../../databases.service';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-register-form-room-component',
  templateUrl: './register-form-room-component.component.html',
  styleUrls: ['./register-form-room-component.component.css']
})
export class RegisterFormRoomComponentComponent implements OnInit {

  dateStartSearch = 0;
  dateEndSearch = 0;
  result1 = 0;
  dateStartRoom = 0;
  dateEndRoom = 0;
  result2 = 0;
  reservaHabitacion: any = [];
  registerRoom: FormGroup;
  fullDataRoom: any;
  active: boolean;
  variable: string;
  segmentado: any = [];
  submitted = false;

  constructor(private formBuilder: FormBuilder, private databasesService: DatabasesService) { }

  ngOnInit(): void {
    this.active = false;
    this.registerRoom = this.formBuilder.group({
      nameRoom: ['', Validators.required],
      capacityRoom: ['', Validators.required],
      Checkout: ['', Validators.required],
      dateStartRoom: ['', Validators.required],
      dateEndRoom: ['', Validators.required],
      file: ['', Validators.required],
      fileSource: [''],
      Checkin: ['', Validators.required],
      drescriptionRoom: ['', Validators.required],
      priceRoom: ['', Validators.required],
      StateRoom: ['', Validators.required],
      companyRoom: ['', Validators.required]
    });
  }

  // Método para subir imagenes
  uploadImgRoom(event){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registerRoom.patchValue({
        fileSource: file
      });
    }
  }

  // Función para validaciones, donde f trae el contenido del campo para luego ser comparado
  get f() {
    return this.registerRoom.controls;
  }

  // Método para añadir habitación
  addRoomButton() {
    this.submitted = true;
        // Validación del formulario
        // tslint:disable-next-line: align
        if (this.registerRoom.invalid) {
          return;
        }
    else
    {
      this.dateStartRoom = new Date(this.registerRoom.value.dateStartRoom).getTime();
      this.dateEndRoom = new Date(this.registerRoom.value.dateEndRoom).getTime();
      this.result2 = ((this.dateEndRoom - this.dateStartRoom) / (1000 * 60 * 60 * 24));

      const Disponibilidad = '!Disponible!';
      const arreglo = new Array(this.result2);

      let i;

      for (i = 0; i < arreglo.length; i++) {
        arreglo[i] = Disponibilidad;
      }

      const roomAvailability = JSON.stringify(arreglo);
      const roomFormData = new FormData();

      roomFormData.append('nameRoom', this.registerRoom.value.nameRoom);
      roomFormData.append('capacityRoom', this.registerRoom.value.capacityRoom);
      roomFormData.append('Checkout', this.registerRoom.value.Checkout);
      roomFormData.append('dateStartRoom', this.registerRoom.value.dateStartRoom);
      roomFormData.append('dateEndRoom', this.registerRoom.value.dateEndRoom);
      roomFormData.append('Checkin', this.registerRoom.value.Checkin);
      roomFormData.append('file', this.registerRoom.get('fileSource').value);
      roomFormData.append('drescriptionRoom', this.registerRoom.value.drescriptionRoom);
      roomFormData.append('priceRoom', this.registerRoom.value.priceRoom);
      roomFormData.append('StateRoom', this.registerRoom.value.StateRoom);
      roomFormData.append('hotelReference', this.registerRoom.value.hotelReference);
      roomFormData.append('arrayRoom', roomAvailability);

      this.databasesService.insertDataRoom(roomFormData).subscribe((res: Response) => {
        alert('Habitación añadido exitosamente');
      });
    }
  }

  // Método para actualizar la información de una habitación
  updateRoomButton(){
    this.dateStartRoom = new Date(this.registerRoom.value.dateStartRoom).getTime();
    this.dateEndRoom = new Date(this.registerRoom.value.dateEndRoom).getTime();
    this.result2 = ((this.dateEndRoom - this.dateStartRoom) / (1000 * 60 * 60 * 24));

    const Disponibilidad = '!Disponible!';
    const arreglo = new Array(this.result2);

    let i;

    for (i = 0; i < arreglo.length; i++) {
      arreglo[i] = Disponibilidad;
    }

    const variable22 = JSON.stringify(arreglo);
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
    // this.databasesService.updateDataRoom(this.registerRoom.value).subscribe();
    alert(JSON.stringify(this.registerRoom.value));
    console.log(variable22);
  }

  // Método para llenar automaticamente los datos de los inputs con los datos de la habitación
  fullDataRoomButton() {

   // let cadena = " tg,r stg,tr tg,tr g,";
    this.variable = (document.getElementById('idRoomUpdate') as HTMLInputElement).value;
    this.databasesService.showOneDataRoom(this.variable).subscribe(
      dataRoom => {
        this.fullDataRoom = dataRoom;
        // let cadena2 = this.fullDataRoom;
        // let cadena3 = cadena2.split(':');
        // alert("dbgfb" + (JSON.stringify(cadena2)));
        // console.log(cadena2);
        // console.log(cadena3);
        // return cadena2;
      });
    setTimeout(() => {

      /*  const cadena3: any = JSON.stringify(this.fullDataRoom);
       const candena4: any = cadena3.split(':');
       this.registerRoom.get('idRoom').setValue(55555);
       this.active = true;
       let cadena2 = cadena.split(',');
      */
      let variar = JSON.stringify(this.fullDataRoom);
      let variar2 = variar.split('"');
      console.log(variar);
      console.log(variar2); // idea con los corchetes.
      alert((variar));
      // console.log(((variar)));
      //  const candena4: any = console.log(JSON.stringify((this.fullDataRoom)).split('"'));
      // console.log(JSON.stringify((candena4)));

    }, 10);
  }
}
