import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewMonthComponent } from './post-view-month.component';

describe('PostViewMonthComponent', () => {
  let component: PostViewMonthComponent;
  let fixture: ComponentFixture<PostViewMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostViewMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostViewMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
