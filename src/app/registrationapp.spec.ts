import { TestBed } from '@angular/core/testing';

import { Registrationapp } from './registrationapp';

describe('Registrationapp', () => {
  let service: Registrationapp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Registrationapp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
