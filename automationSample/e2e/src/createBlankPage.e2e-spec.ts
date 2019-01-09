import { SideBar } from '../pageObjects';

describe('Check if user can create new blank page', () => {
  let page: SideBar;

  beforeEach(() => {
    page = new SideBar();
    page.navigateTo();
  });

  it('Should create new blank page', () => {
    const randomTitle = getRandomString();

    const pageEdit = page.addBlankPage();
    pageEdit.setTitle(randomTitle);
    const yourworkPage = pageEdit.closePage();
    expect(yourworkPage.getRecentlyCreatedItem()).toContain(randomTitle, 'Invalid title');
  });
});

function getRandomString(): string {
  return Math.random().toString(36).substring(7);
}
