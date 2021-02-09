import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsStatiticsComponent } from './posts-statitics.component';

describe('PostsStatiticsComponent', () => {
  let component: PostsStatiticsComponent;
  let fixture: ComponentFixture<PostsStatiticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsStatiticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsStatiticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
