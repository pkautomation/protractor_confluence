import { browser, $, ExpectedConditions as ES } from 'protractor';
import { BlankPage } from './';

export class TemplateSelection {
  private createPageConfirmBtn = $('[data-test-id="create-dialog-create-button"]');

  confirmSelection(): BlankPage {
    browser.wait(ES.elementToBeClickable(this.createPageConfirmBtn));
    // sometimes the button is clickable, but still needs some time to make it click
    browser.sleep(2000);
    this.createPageConfirmBtn.click();
    return new BlankPage();
  }
}
