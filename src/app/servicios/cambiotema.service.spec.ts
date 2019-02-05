import { TestBed } from '@angular/core/testing';

import { CambiotemaService } from './cambiotema.service';

describe('CambiotemaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CambiotemaService = TestBed.get(CambiotemaService);
    expect(service).toBeTruthy();
  });
});
