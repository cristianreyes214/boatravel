import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormHotelComponent } from './register-form-hotel.component';

describe('RegisterFormHotelComponent', () => {
  let component: RegisterFormHotelComponent;
  let fixture: ComponentFixture<RegisterFormHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
