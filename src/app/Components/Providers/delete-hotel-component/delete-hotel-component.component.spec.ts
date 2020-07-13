import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHotelComponentComponent } from './delete-hotel-component.component';

describe('DeleteHotelComponentComponent', () => {
  let component: DeleteHotelComponentComponent;
  let fixture: ComponentFixture<DeleteHotelComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteHotelComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHotelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
