import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateBreadscrumbComponent } from './cate-breadscrumb.component';

describe('CateBreadscrumbComponent', () => {
  let component: CateBreadscrumbComponent;
  let fixture: ComponentFixture<CateBreadscrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateBreadscrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateBreadscrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
