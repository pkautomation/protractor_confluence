import { ExpectedConditions as ES, browser, ElementFinder } from 'protractor';

export class ActionWrapper {
    static clickElement(eleFinder: ElementFinder) {
        browser.wait(ES.presenceOf(eleFinder));
        browser.wait(ES.elementToBeClickable(eleFinder));
        eleFinder.click();
      }

    static enterText(eleFinder: ElementFinder, text: string) {
        browser.wait(ES.elementToBeClickable(eleFinder));
        eleFinder.sendKeys(text);
      }
}
