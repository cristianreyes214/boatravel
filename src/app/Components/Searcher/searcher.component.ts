import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatabasesService } from '../../databases.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  lookForHotel: FormGroup;
  dataHotelSeeker: any = [];
  habitacion123: any = [];
  dateStartSearch = 0;
  dateEndSearch = 0;
  result1 = 0;
  dateStartRoom = 0;
  dateEndRoom = 0;
  result2 = 0;
  reservaHabitacion: any= [];
  variable: any = '';
  arregloEnvio:FormGroup;

  constructor(private formBuilder: FormBuilder, private databasesService: DatabasesService) { }

  ngOnInit(): void {
    this.arregloEnvio = this.formBuilder.group({
      idRoom: [''],
      arrayRoom: ['']
      
    });
    this.lookForHotel = this.formBuilder.group({
      place: [''],
      numberPeople: [''],
      dateStartTravel: [''],
      dateEndTravel: ['']
    });
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
    alert (JSON.stringify((this.lookForHotel.value)));

/*
    this.dateStartSearch = new Date(this.lookForHotel.value.dateStartSearch).getTime();
    this.dateEndSearch = new Date(this.lookForHotel.value.dateEndSearch).getTime();
    // this.buscarDisponibilidad();
   // return this.dateEndSearch , this.dateStartSearch;

*/this.habitacion123= [];
    this.databasesService.buscadorHabitaciones123(this.lookForHotel.value).subscribe(
      habitacion123 => {
        this.habitacion123.push(habitacion123);
      }
    );

    alert(JSON.stringify(variable));
  }
  

  lookForDisponibilityRoomButton(variable: any) {
    let arregloHabitacion;

    this.dateStartSearch = new Date(this.lookForHotel.value.dateStartSearch).getTime();
    this.dateEndSearch = new Date(this.lookForHotel.value.dateEndSearch).getTime();
    // this.buscarDisponibilidad();

    this.databasesService.buscadorArregloHabitacion(variable).subscribe(
      arreglo => {
        this.reservaHabitacion = arreglo;
      }
    );
    alert(JSON.stringify(variable));
    
    setTimeout(() => {
      arregloHabitacion = JSON.stringify(this.reservaHabitacion);
      let porfin2 = arregloHabitacion.split('!');
      let i;
      let cadena = '';
      for (i = 0; i < porfin2.length; i++) {
        if (i % 2 == 0) {
        } else {
          cadena += ",!" + porfin2[i] + "!";

        }

      }
      let arrgloFinal = cadena.split(',');
      arrgloFinal.shift();
      alert(JSON.stringify(arrgloFinal));
      console.log((arrgloFinal));
      let b;
      for (b = 1; 10 > b; b++) {
        arrgloFinal[b] = "Punto A";
      }
      const arreglillo = JSON.stringify(arrgloFinal);

      this.arregloEnvio = this.formBuilder.group({
        idRoom: [variable],
        arrayRoom: [arreglillo]

      });
      alert(JSON.stringify(this.arregloEnvio.value));
      console.log(JSON.stringify(this.arregloEnvio.value));

      this.databasesService.updateArrayRoom(this.arregloEnvio.value).subscribe(
      );

      console.log(arrgloFinal);
      alert(JSON.stringify(arrgloFinal));

      //arrgloFinal = [];
     // cadena = '';

    }, 100);





  }
  

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

*/

