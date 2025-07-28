import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipovehiculosComponent } from './tipovehiculos.component';

describe('TipovehiculosComponent', () => {
  let component: TipovehiculosComponent;
  let fixture: ComponentFixture<TipovehiculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipovehiculosComponent]
    });
    fixture = TestBed.createComponent(TipovehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
