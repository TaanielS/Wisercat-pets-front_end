import { TestBed } from '@angular/core/testing';

import { PetManagementService } from './pet-management.service';

describe('PetManagementService', () => {
  let service: PetManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
