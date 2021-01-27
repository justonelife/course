import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDecisionComponent } from './login-decision.component';

describe('LoginDecisionComponent', () => {
  let component: LoginDecisionComponent;
  let fixture: ComponentFixture<LoginDecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LoginDecisionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
