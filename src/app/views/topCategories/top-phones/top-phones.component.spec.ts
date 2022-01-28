import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPhonesComponent } from './top-phones.component';

describe('TopPhonesComponent', () => {
  let component: TopPhonesComponent;
  let fixture: ComponentFixture<TopPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
