import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBeddingComponent } from './home-bedding.component';

describe('HomeBeddingComponent', () => {
  let component: HomeBeddingComponent;
  let fixture: ComponentFixture<HomeBeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBeddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
