import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getItemTexts(): Promise<string[]> {
    return element.all(by.css('li')).map(e => e?.getText());
  }
}
