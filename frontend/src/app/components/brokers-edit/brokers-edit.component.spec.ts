import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokersEditComponent } from './brokers-edit.component';

describe('BrokersEditComponent', () => {
  let component: BrokersEditComponent;
  let fixture: ComponentFixture<BrokersEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrokersEditComponent]
    });
    fixture = TestBed.createComponent(BrokersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
