import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormRoomComponentComponent } from './register-form-room-component.component';

describe('RegisterFormRoomComponentComponent', () => {
  let component: RegisterFormRoomComponentComponent;
  let fixture: ComponentFixture<RegisterFormRoomComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormRoomComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormRoomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
