import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRoomComponentComponent } from './delete-room-component.component';

describe('DeleteRoomComponentComponent', () => {
  let component: DeleteRoomComponentComponent;
  let fixture: ComponentFixture<DeleteRoomComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRoomComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRoomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
