import { TestBed } from '@angular/core/testing';

import { ImagenService } from './imagen.service';

describe('ImagenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagenService = TestBed.get(ImagenService);
    expect(service).toBeTruthy();
  });
});
