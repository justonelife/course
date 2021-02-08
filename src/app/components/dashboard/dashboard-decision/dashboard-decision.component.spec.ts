import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDecisionComponent } from './dashboard-decision.component';

describe('DashboardDecisionComponent', () => {
  let component: DashboardDecisionComponent;
  let fixture: ComponentFixture<DashboardDecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
