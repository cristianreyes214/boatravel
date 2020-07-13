import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatabasesService } from '../../../databases.service';
@Component({
  selector: 'app-hotel-component',
  templateUrl: './hotel-component.component.html',
  styleUrls: ['./hotel-component.component.css']
})

export class HotelComponentComponent implements OnInit {

  dataHotel: any = [];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private databasesService: DatabasesService) { }

  ngOnInit(): void {
  }
  showHotelButton(){
    this.databasesService.showHotel().subscribe(
      dataHotel => {
        this.dataHotel.push(dataHotel);
      });
    setTimeout(() => { alert('Se han mostrado todos los hoteles con exito'); }, 500);


  }

}
