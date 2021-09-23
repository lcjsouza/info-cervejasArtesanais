import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilosCervejasComponent } from './estilos-cervejas.component';

describe('EstilosCervejasComponent', () => {
  let component: EstilosCervejasComponent;
  let fixture: ComponentFixture<EstilosCervejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstilosCervejasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstilosCervejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
