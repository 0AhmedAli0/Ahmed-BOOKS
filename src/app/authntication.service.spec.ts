import { TestBed } from '@angular/core/testing';

import { AuthnticationService } from './authntication.service';

describe('AuthnticationService', () => {
  let service: AuthnticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthnticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
