import { TestBed } from '@angular/core/testing';

import { RegistrationappGlobal } from './registrationapp-global';

describe('RegistrationappGlobal', () => {
  let service: RegistrationappGlobal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationappGlobal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
