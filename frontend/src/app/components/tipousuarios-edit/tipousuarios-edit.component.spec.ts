import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuariosEditComponent } from './tipousuarios-edit.component';

describe('TipousuariosEditComponent', () => {
  let component: TipousuariosEditComponent;
  let fixture: ComponentFixture<TipousuariosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipousuariosEditComponent]
    });
    fixture = TestBed.createComponent(TipousuariosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
