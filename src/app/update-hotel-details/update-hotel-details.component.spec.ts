import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHotelDetailsComponent } from './update-hotel-details.component';

describe('UpdateHotelDetailsComponent', () => {
  let component: UpdateHotelDetailsComponent;
  let fixture: ComponentFixture<UpdateHotelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHotelDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHotelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
