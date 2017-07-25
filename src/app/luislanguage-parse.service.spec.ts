import { TestBed, inject } from '@angular/core/testing';

import { LUISLanguageParseService } from './luislanguage-parse.service';

describe('LUISLanguageParseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LUISLanguageParseService]
    });
  });

  it('should be created', inject([LUISLanguageParseService], (service: LUISLanguageParseService) => {
    expect(service).toBeTruthy();
  }));
});
