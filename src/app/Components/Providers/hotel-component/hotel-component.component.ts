import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hotel-component',
  templateUrl: './hotel-component.component.html',
  styleUrls: ['./hotel-component.component.css']
})

export class HotelComponentComponent implements OnInit {



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
