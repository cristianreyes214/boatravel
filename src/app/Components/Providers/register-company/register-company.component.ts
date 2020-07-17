import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatabasesService } from '../../../databases.service';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {

  // Variables globales
  registerCompany: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private databasesService: DatabasesService, private router: Router) { }

  ngOnInit(): void {
    this.registerCompany = this.formBuilder.group({
      idCompany: ['', Validators.required],
      nameCompany: ['', Validators.required],
      telCompany1: ['', Validators.required],
      telCompany2: ['', Validators.required],
      emailCompany: ['', Validators.required],
      idProveedor: ['', Validators.required]
    });
  }

  // Función para validaciones, donde f trae el contenido del campo para luego ser comparado
  get f() {
    return this.registerCompany.controls;
  }

  // Función del botón Añadir empresa
  addCompanyButton() {
    this.submitted = true;
        // Validación del formulario
        // tslint:disable-next-line: align
        if (this.registerCompany.invalid) {
          return;
        }
    else
    {
      const formData = new FormData();
      // append es un método de FormData para agregar un valor nuevo al final del conjunto de valores
      formData.append('idCompany', this.registerCompany.value.idCompany);
      formData.append('nameCompany', this.registerCompany.value.nameCompany);
      formData.append('telCompany1', this.registerCompany.value.telCompany1);
      formData.append('telCompany2', this.registerCompany.value.telCompany2);
      formData.append('emailCompany', this.registerCompany.value.emailCompany);
      formData.append('idProveedor', this.registerCompany.value.idProveedor);
      this.databasesService.InsertDateCompany(formData).subscribe((res: Response) => {
        alert('Empresa añadida exitosamente');
        // Una vez se añada la información a la base de datos debe regresar al login
        this.router.navigate(['/']);
      });
    }
  }

}
