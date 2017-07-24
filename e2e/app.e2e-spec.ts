import { NaturalLanguagePage } from './app.po';

describe('natural-language App', () => {
  let page: NaturalLanguagePage;

  beforeEach(() => {
    page = new NaturalLanguagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
