import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatabasesService } from '../../databases.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  loginProveedor: FormGroup;
  active: boolean;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private databasesService: DatabasesService, private router: Router) { }

  ngOnInit(): void {
    this.active = false;
    this.loginProveedor = this.formBuilder.group({
      userProveedor: ['', Validators.required],
      passwordProveedor: ['', Validators.required]
    });
  }

  get f(){
    return this.loginProveedor.controls;
  }

  loginProvedorButton(){
    this.submitted = true;
    if (this.loginProveedor.invalid) {
      return;
    }
    else {
      this.databasesService.loginDataProveedor(this.loginProveedor.value).subscribe(
        datos => {
          if (datos === 'exito') {
            this.active = true;
            alert('Ha iniciado sesion exitosamente');
            //routerLink='/hotels';
            //this.router.navigate(['/hotels']);
          } else {
            this.active = false;
            alert('Su usuario o contraseña es incorrecto' + this.active);
          }
        }
      );
    }
  }

}
