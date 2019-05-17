import { TestBed } from '@angular/core/testing';

import { HardcodedAuthServices } from './hardcoded-auth.services';

describe('HardcodedAuthServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodedAuthServices = TestBed.get(HardcodedAuthServices);
    expect(service).toBeTruthy();
  });
});
