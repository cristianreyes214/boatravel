import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatabasesService } from '../../../databases.service';


@Component({
  selector: 'app-register-form-hotel',
  templateUrl: './register-form-hotel.component.html',
  styleUrls: ['./register-form-hotel.component.css']
})

export class RegisterFormHotelComponent implements OnInit {

  // Declaración de las variables;

  registerHotel: FormGroup;

  variable: any = '';




  // Se instancia en el constructor una variable que sea del tipo de las importaciones realizadas para poder usarlas
  constructor(private formBuilder: FormBuilder, private databasesService: DatabasesService) { }

  // Aqui se instancia de manera inmedita los elementos del componente que estan dentro de la instancia (similar al update de Unity)
  ngOnInit(): void {
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
  }

  // Funciones para obtener información de la imagen que tiene un id file y comprobar que se enviá algo y no un obj vacio.
  get f() {
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
    this.databasesService.InsertDateHotel(formData).subscribe((res: Response) => {
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

  prueba(variable: any) {

    const arreglo = new Array("johann", "montoya", "rubuano");
    alert(arreglo);
    console.log(arreglo);

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



