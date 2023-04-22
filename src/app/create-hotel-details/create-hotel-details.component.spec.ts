import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHotelDetailsComponent } from './create-hotel-details.component';

describe('CreateHotelDetailsComponent', () => {
  let component: CreateHotelDetailsComponent;
  let fixture: ComponentFixture<CreateHotelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHotelDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHotelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
