import { TestBed } from '@angular/core/testing';

import { BancoQuestoesService } from './banco-questoes.service';

describe('BancoQuestoesService', () => {
  let service: BancoQuestoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancoQuestoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
