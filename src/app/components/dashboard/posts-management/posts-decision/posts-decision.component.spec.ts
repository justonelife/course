import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDecisionComponent } from './posts-decision.component';

describe('PostsDecisionComponent', () => {
  let component: PostsDecisionComponent;
  let fixture: ComponentFixture<PostsDecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsDecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
