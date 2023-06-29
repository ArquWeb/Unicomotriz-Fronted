import { TestBed } from '@angular/core/testing';

import { CarroCompraService } from './carro-compra.service';

describe('CarroCompraService', () => {
  let service: CarroCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarroCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
