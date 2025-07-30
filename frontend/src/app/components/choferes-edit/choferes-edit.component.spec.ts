import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoferesEditComponent } from './choferes-edit.component';

describe('ChoferesEditComponent', () => {
  let component: ChoferesEditComponent;
  let fixture: ComponentFixture<ChoferesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoferesEditComponent]
    });
    fixture = TestBed.createComponent(ChoferesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
