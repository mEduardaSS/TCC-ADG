import { TestBed } from '@angular/core/testing';

import { CompartilhaIdVoluntarioService } from './compartilha-id-voluntario.service';

describe('CompartilhaIdVoluntarioService', () => {
  let service: CompartilhaIdVoluntarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompartilhaIdVoluntarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
