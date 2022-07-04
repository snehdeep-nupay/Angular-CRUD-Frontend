import { TestBed } from '@angular/core/testing';

import { TurotialService } from './turotial.service';

describe('TurotialService', () => {
  let service: TurotialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurotialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
