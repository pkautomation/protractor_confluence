import { $$, ExpectedConditions, browser } from 'protractor';

export class YourWorkPage {
  private recentItem = $$('[data-test-id="content-list"] div p').first();

  getRecentlyCreatedItem() {
    browser.wait(ExpectedConditions.presenceOf(this.recentItem));
    return this.recentItem.getText();
  }
}
