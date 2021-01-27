import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthorizationService } from './authorization.service';

describe('AuthorizationService', () => {
  let service: AuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthorizationService],
    });
    service = TestBed.inject(AuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
