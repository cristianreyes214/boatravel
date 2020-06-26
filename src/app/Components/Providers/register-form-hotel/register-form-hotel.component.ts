import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-form-hotel',
  templateUrl: './register-form-hotel.component.html',
  styleUrls: ['./register-form-hotel.component.css']
})

export class RegisterFormHotelComponent implements OnInit {

  registerHotel: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.registerHotel = this.formBuilder.group({
      nameHotel: [''],
      locationHotel: [''],
      telHotel: [''],
      tel2: [''],
      descHotel: [''],
      addressHotel: [''],
      fkCompany: ['']
    });
  }

  onSubmit() {

    this.InsertDateHotel();
  }

  InsertDateHotel() {
    this.databasesService.InsertDateHotel(this.registerHotel.value).subscribe(
      datos => {
        if (datos[' resultado '] === 'OK') {
          alert(datos[' mensaje']);
        }
      }
    );

  }

}
