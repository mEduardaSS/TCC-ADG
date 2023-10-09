import { TestBed } from '@angular/core/testing';

import { FormAdocaoService } from './form-adocao.service';

describe('FormAdocaoService', () => {
  let service: FormAdocaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormAdocaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
