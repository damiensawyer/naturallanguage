export interface ILanguageParseService {
    Name: string;
    parseText(naturalLanguage: string): Promise<LanguageParseResults>;
}

export class LanguageParseResults {
    resultJSON: string;
}
