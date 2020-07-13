import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatabasesService } from '../../../databases.service';

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

  constructor(private formBuilder: FormBuilder, private databasesService: DatabasesService) { }

  ngOnInit(): void {
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

    alert(JSON.stringify(this.registerRoom.value));
    console.log(arreglo);
    this.databasesService.insertDataRoom(this.registerRoom.value).subscribe();



  }
}
