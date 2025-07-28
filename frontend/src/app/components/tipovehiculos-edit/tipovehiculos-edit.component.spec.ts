import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipovehiculosEditComponent } from './tipovehiculos-edit.component';

describe('TipovehiculosEditComponent', () => {
  let component: TipovehiculosEditComponent;
  let fixture: ComponentFixture<TipovehiculosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipovehiculosEditComponent]
    });
    fixture = TestBed.createComponent(TipovehiculosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
