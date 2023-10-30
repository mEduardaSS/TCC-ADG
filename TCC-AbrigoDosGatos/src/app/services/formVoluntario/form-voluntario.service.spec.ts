import { TestBed } from '@angular/core/testing';

import { FormVoluntarioService } from './form-voluntario.service';

describe('FormVoluntarioService', () => {
  let service: FormVoluntarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormVoluntarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
