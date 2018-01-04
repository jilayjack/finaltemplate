import { TestBed, inject } from '@angular/core/testing';

import { LoginDataServiceService } from './login-data-service.service';

describe('LoginDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginDataServiceService]
    });
  });

  it('should be created', inject([LoginDataServiceService], (service: LoginDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
