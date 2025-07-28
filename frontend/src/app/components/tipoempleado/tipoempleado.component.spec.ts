import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoempleadoComponent } from './tipoempleado.component';

describe('TipoempleadoComponent', () => {
  let component: TipoempleadoComponent;
  let fixture: ComponentFixture<TipoempleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoempleadoComponent]
    });
    fixture = TestBed.createComponent(TipoempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
