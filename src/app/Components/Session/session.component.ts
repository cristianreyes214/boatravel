import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatabasesService } from '../../databases.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  loginProveedor: FormGroup;
  active: boolean;
  constructor(private formBuilder: FormBuilder, private databasesService: DatabasesService) { }

  ngOnInit(): void {
    this.loginProveedor = this.formBuilder.group({
      userProveedor: [''],
      passwordProveedor: ['']
    });
  }
  loginProvedorButton(){
    this.databasesService.loginDataProveedor(this.loginProveedor.value).subscribe(
      datos => {
        if (datos === 'exito') {
          this.active = true;
          alert('Ha iniciado sesion exitosamente');
        }else{
          this.active = false;
          alert('Su usuario o contraseña es incorrecto');
        }
      }
    );
  }

}
