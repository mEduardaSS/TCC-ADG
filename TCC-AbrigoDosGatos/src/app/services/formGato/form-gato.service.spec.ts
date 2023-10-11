import { TestBed } from '@angular/core/testing';

import { FormGatoService } from './form-gato.service';

describe('FormGatoService', () => {
  let service: FormGatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormGatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
