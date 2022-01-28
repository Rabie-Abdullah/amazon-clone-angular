import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBeautyComponent } from './top-beauty.component';

describe('TopBeautyComponent', () => {
  let component: TopBeautyComponent;
  let fixture: ComponentFixture<TopBeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBeautyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
