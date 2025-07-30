import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargasEditComponent } from './cargas-edit.component';

describe('CargasEditComponent', () => {
  let component: CargasEditComponent;
  let fixture: ComponentFixture<CargasEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargasEditComponent]
    });
    fixture = TestBed.createComponent(CargasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
