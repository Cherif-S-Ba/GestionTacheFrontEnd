import { TestBed } from '@angular/core/testing';

import { TacheEditService } from './tache-edit.service';

describe('TacheEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TacheEditService = TestBed.get(TacheEditService);
    expect(service).toBeTruthy();
  });
});
