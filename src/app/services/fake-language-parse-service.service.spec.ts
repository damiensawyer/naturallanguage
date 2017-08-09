import { TestBed, inject } from '@angular/core/testing';

import { FakeLanguageParseServiceService } from './fake-language-parse-service.service';

describe('FakeLanguageParseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeLanguageParseServiceService]
    });
  });

  it('should be created', inject([FakeLanguageParseServiceService], (service: FakeLanguageParseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
