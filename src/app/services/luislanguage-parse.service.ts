import { Injectable } from '@angular/core';
import { ILanguageParseService, LanguageParseResults } from './ilanguage-parse-service';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class LUISLanguageParseService implements ILanguageParseService {

  constructor(private http: Http) { }

  Name = 'MS LUIS (NB - we only have 1000 free API calls then it will fail)';
  parseText(naturalLanguage: string): Promise<LanguageParseResults> {

    const url = `https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/cdd7ebfd-e0ea-4b1f-8e8b-1dde80aac11e`
      + `?subscription-key=5bbcf031383a444487ee69fddec7a09a&verbose=true&timezoneOffset=0&q=${naturalLanguage}`;

    return this.http.get(url)
      .toPromise()
      .then(response => {
        return <LanguageParseResults>{ resultJSON: response.text() };
      })
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
