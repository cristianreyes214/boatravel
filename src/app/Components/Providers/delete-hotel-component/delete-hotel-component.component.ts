import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { DatabasesService } from '../../../databases.service';

@Component({
  selector: 'app-delete-hotel-component',
  templateUrl: './delete-hotel-component.component.html',
  styleUrls: ['./delete-hotel-component.component.css']
})
export class DeleteHotelComponentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private databasesService: DatabasesService) { }
  deleteHotel: FormGroup;
  ngOnInit(): void {
    this.deleteHotel = this.formBuilder.group({
      IDDHotel: ['']
    });
  }
  deleteHotelButton(){
    this.databasesService.deleteDataHotel(this.deleteHotel.value).subscribe();
    alert( 'El hotel se ha eliminado exitosamente');
  }

}
