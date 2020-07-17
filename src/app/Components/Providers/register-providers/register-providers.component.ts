import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatabasesService } from '../../../databases.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-providers',
  templateUrl: './register-providers.component.html',
  styleUrls: ['./register-providers.component.css']
})
export class RegisterProvidersComponent implements OnInit {

  // Variables globales
  registerProviders: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private databasesService: DatabasesService, private router: Router) { }

  ngOnInit(): void {
    this.registerProviders = this.formBuilder.group({
      idProveedor: ['', Validators.required],
      nameProvider: ['', Validators.required],
      passProvider: ['', Validators.required],
      firstNameProvider: ['', Validators.required],
      secondNameProvider: [''],
      firstSurname: ['', Validators.required],
      secondSurnameProvider: [''],
      telProvider: ['', Validators.required],
      tel2: [''],
      dateProvider: ['', Validators.required],
      emailProvider: ['', Validators.required, Validators.email]
    });
  }

  // Función para validaciones, donde f trae el contenido del campo para luego ser comparado
  get f() {
    return this.registerProviders.controls;
  }

  // Función del botón Añadir un proveedor
  addProviderButton() {
    this.submitted = true;
        // Validación del formulario
        // tslint:disable-next-line: align
        if (this.registerProviders.invalid) {
          return;
        }
    else
    {
      const formData = new FormData();
      // append es un método de FormData para agregar un valor nuevo al final del conjunto de valores
      formData.append('idProveedor', this.registerProviders.value.idProveedor);
      formData.append('nameProvider', this.registerProviders.value.nameProvider);
      formData.append('passProvider', this.registerProviders.value.passProvider);
      formData.append('firstNameProvider', this.registerProviders.value.firstNameProvider);
      formData.append('secondNameProvider', this.registerProviders.value.secondNameProvider);
      formData.append('firstSurname', this.registerProviders.value.firstSurname);
      formData.append('secondSurnameProvider', this.registerProviders.value.secondSurnameProvider);
      formData.append('telProvider', this.registerProviders.value.telProvider);
      formData.append('tel2', this.registerProviders.value.tel2);
      formData.append('dateProvider', this.registerProviders.value.dateProvider);
      formData.append('emailProvider', this.registerProviders.value.emailProvider);
      this.databasesService.InsertDateProvider(formData).subscribe((res: Response) => {
        alert('Proveedor añadido exitosamente');
        // Una vez se añada la información a la base de datos debe continuar con el formulario de registro de la empresa
        this.router.navigate(['/registerCompany']);
      });
    }
  }

  // La función de este botón es regresar al login
  backInicio(){
    this.router.navigate(['/']);
  }

}
