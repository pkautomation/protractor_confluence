import { browser, $, ExpectedConditions as EC } from 'protractor';
import { YourWorkPage, ActionWrapper as aw } from './';
import { RestrictionsSelection } from './RestrictionsSelection';

export class BlankPage {

  private closeButton = $('#rte-button-cancel');
  private title = $('[data-test-id="tiny-content-title"]');
  private restrictionBtn = $('#editpageform #rte-button-restrictions');
  private restrictedBtn = $('.icon.aui-icon.aui-icon-small.aui-iconfont-locked.icon-red');

  setTitle(title: string) {
    browser.wait(EC.elementToBeClickable(this.title));
    this.title.sendKeys(title);
  }

  closePage(): YourWorkPage {
    aw.clickElement(this.closeButton);
    // sometimes the button is clickable, but still needs some time to make it click
    browser.sleep(3000);
    browser.switchTo().alert().accept();

    return new YourWorkPage();
  }

  clickRestrictionBtn(): RestrictionsSelection {
    aw.clickElement(this.restrictionBtn);

    return new RestrictionsSelection();
  }

  checkIfRestrictedButtonIsVisible() {
    browser.wait(EC.visibilityOf(this.restrictedBtn));
  }
}
