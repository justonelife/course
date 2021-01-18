import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigGroupComponent } from './big-group.component';

describe('BigGroupComponent', () => {
  let component: BigGroupComponent;
  let fixture: ComponentFixture<BigGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
