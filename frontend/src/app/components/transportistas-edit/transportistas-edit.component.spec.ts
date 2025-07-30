import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportistasEditComponent } from './transportistas-edit.component';

describe('TransportistasEditComponent', () => {
  let component: TransportistasEditComponent;
  let fixture: ComponentFixture<TransportistasEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportistasEditComponent]
    });
    fixture = TestBed.createComponent(TransportistasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
