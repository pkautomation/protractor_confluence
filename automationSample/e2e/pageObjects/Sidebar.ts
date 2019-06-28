import { browser, $ } from 'protractor';
import { TemplateSelection, BlankPage, ActionWrapper as aw } from './';

export class SideBar {
  private url = 'https://pkautomationsample.atlassian.net/wiki/spaces/ONEMANARMY/overview';
  private email = $('#username');
  private password = $('#password');
  private submitBtn = $('#login-submit');
  private addPageButton = $('[aria-label="Create"]');

  navigateTo() {
    return browser.get(this.url);
  }

  enterEmail(email: string) {
    aw.enterText(this.email, email);
    aw.clickElement(this.submitBtn);
  }

  enterPassword(password: string) {
    aw.enterText(this.password, password);
    aw.clickElement(this.submitBtn);
  }

  clickAddPageButton() : TemplateSelection {
    aw.clickElement(this.addPageButton);
    return new TemplateSelection();
  }

  addBlankPage(): BlankPage {
    let templatePicker = this.clickAddPageButton();
    templatePicker.confirmSelection();
    return new BlankPage();
  }
}
