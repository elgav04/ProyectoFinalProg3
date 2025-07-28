import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuariosComponent } from './tipousuarios.component';

describe('TipousuariosComponent', () => {
  let component: TipousuariosComponent;
  let fixture: ComponentFixture<TipousuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipousuariosComponent]
    });
    fixture = TestBed.createComponent(TipousuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
