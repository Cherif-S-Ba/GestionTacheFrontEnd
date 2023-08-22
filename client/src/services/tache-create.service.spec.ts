import { TestBed } from '@angular/core/testing';

import { TacheCreateService } from './tache-create.service';

describe('TacheCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TacheCreateService = TestBed.get(TacheCreateService);
    expect(service).toBeTruthy();
  });
});
