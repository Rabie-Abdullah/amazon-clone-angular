import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectriCarsComponent } from './electri-cars.component';

describe('ElectriCarsComponent', () => {
  let component: ElectriCarsComponent;
  let fixture: ComponentFixture<ElectriCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectriCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectriCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
