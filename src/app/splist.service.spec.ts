/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SplistService } from './splist.service';

describe('SplistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SplistService]
    });
  });

  it('should ...', inject([SplistService], (service: SplistService) => {
    expect(service).toBeTruthy();
  }));
});
