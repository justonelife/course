import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveGroupComponent } from './five-group.component';

describe('FiveGroupComponent', () => {
  let component: FiveGroupComponent;
  let fixture: ComponentFixture<FiveGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FiveGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
