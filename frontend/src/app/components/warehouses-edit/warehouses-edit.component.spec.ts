import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousesEditComponent } from './warehouses-edit.component';

describe('WarehousesEditComponent', () => {
  let component: WarehousesEditComponent;
  let fixture: ComponentFixture<WarehousesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarehousesEditComponent]
    });
    fixture = TestBed.createComponent(WarehousesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
