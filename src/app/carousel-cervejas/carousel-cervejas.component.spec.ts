import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCervejasComponent } from './carousel-cervejas.component';

describe('CarouselCervejasComponent', () => {
  let component: CarouselCervejasComponent;
  let fixture: ComponentFixture<CarouselCervejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselCervejasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCervejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
