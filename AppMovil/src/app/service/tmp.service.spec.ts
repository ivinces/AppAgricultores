import { TestBed } from '@angular/core/testing';

import { TmpService } from './tmp.service';

describe('TmpService', () => {
  let service: TmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
