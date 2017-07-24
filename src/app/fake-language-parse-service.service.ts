import { Injectable } from '@angular/core';
import { ILanguageParseService, LanguageParseResults } from './ilanguage-parse-service';
@Injectable()
export class FakeLanguageParseServiceService implements ILanguageParseService {
  Name: string;
  parseText(naturalLanguage: string): Promise<LanguageParseResults> {
    const response =  !naturalLanguage ? '' : `${naturalLanguage} ... results`;
    const result = <LanguageParseResults>{ resultJSON: response };
    return Promise.resolve(result);
  }

  constructor() { }
}
