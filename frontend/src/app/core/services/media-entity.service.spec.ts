import { TestBed } from '@angular/core/testing';

import { MediaEntityService } from './media-entity.service';

describe('EntityService', () => {
  let service: MediaEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
