import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDeDatosComponent } from './carga-de-datos.component';

describe('CargaDeDatosComponent', () => {
  let component: CargaDeDatosComponent;
  let fixture: ComponentFixture<CargaDeDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaDeDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaDeDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
