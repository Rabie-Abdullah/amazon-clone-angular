import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsTapletsComponent } from './laptops-taplets.component';

describe('LaptopsTapletsComponent', () => {
  let component: LaptopsTapletsComponent;
  let fixture: ComponentFixture<LaptopsTapletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopsTapletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopsTapletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
