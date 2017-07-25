import { Injectable } from '@angular/core';
import { ILanguageParseService, LanguageParseResults } from './ilanguage-parse-service';


@Injectable()
export class LUISLanguageParseService implements ILanguageParseService {
  Name: string;
  parseText(naturalLanguage: string): Promise<LanguageParseResults> {

    const result = <LanguageParseResults>{ resultJSON: `LUIS NOT IMPLEMENTED : ${naturalLanguage}` };
    return Promise.resolve(result);
  }

  constructor() { }

}
