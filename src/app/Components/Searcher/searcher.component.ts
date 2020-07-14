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
  reservaHabitacion: any = [];
  variable: any = '';
  constructor(private formBuilder: FormBuilder, private databasesService: DatabasesService) { }

  ngOnInit(): void {
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
  

}
