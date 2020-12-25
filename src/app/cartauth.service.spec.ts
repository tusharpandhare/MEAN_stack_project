import { TestBed } from '@angular/core/testing';

import { CartauthService } from './cartauth.service';

describe('CartauthService', () => {
  let service: CartauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
