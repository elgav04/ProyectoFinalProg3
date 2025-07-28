import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoempleadoEditComponent } from './tipoempleado-edit.component';

describe('TipoempleadoEditComponent', () => {
  let component: TipoempleadoEditComponent;
  let fixture: ComponentFixture<TipoempleadoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoempleadoEditComponent]
    });
    fixture = TestBed.createComponent(TipoempleadoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
