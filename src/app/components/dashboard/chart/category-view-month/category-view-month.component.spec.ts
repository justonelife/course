import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryViewMonthComponent } from './category-view-month.component';

describe('CategoryViewMonthComponent', () => {
  let component: CategoryViewMonthComponent;
  let fixture: ComponentFixture<CategoryViewMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryViewMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryViewMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
