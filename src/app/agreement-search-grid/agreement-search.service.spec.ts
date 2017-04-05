import { TestBed, inject } from '@angular/core/testing';

import { AgreementSearchService } from './agreement-search.service';

describe('AgreementSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgreementSearchService]
    });
  });

  it('should ...', inject([AgreementSearchService], (service: AgreementSearchService) => {
    expect(service).toBeTruthy();
  }));
});
