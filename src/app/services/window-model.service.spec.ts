import { TestBed } from '@angular/core/testing';

import { WindowModelService } from './window-model.service';

describe('WindowModelService', () => {
  let service: WindowModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
