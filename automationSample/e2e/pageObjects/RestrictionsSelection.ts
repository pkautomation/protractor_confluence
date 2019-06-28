import { browser, $, ExpectedConditions as ES, $$ } from 'protractor';
import { BlankPage, ActionWrapper as aw } from './';

export enum Restrictions {
    noRestriciton = 1,
    editingRestricted = 2,
    ViewAndEditRestricted = 3
}


export class RestrictionsSelection {
  private confirmRestrictionBtn = $('#page-restrictions-dialog-save-button');
  private restrictionsDropdown = $('.select2-choice');
  private restrictionOptions = $$('.restrictions-dialog-option .title');

  changeRestriction(newRestriction: Restrictions): BlankPage {
    aw.clickElement(this.restrictionsDropdown);
    aw.clickElement($$('.restrictions-dialog-option').get(newRestriction));
    // sometimes the button is clickable, but still needs some time to make it click
    browser.sleep(2000);
    this.confirmRestrictionBtn.click();
    return new BlankPage();
  }
}
