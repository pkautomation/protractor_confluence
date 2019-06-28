import { SideBar, Restrictions } from '../pageObjects';

describe('Check if user can make restrictions', () => {
  let page: SideBar;

  beforeEach(() => {
    page = new SideBar();
    page.navigateTo();
  });

  it('Is able to change restriction', () => {
    const blankPage = page.addBlankPage();
    const chooseRestriction = blankPage.clickRestrictionBtn();
    const restrictedBlankPage = chooseRestriction.changeRestriction(Restrictions.ViewAndEditRestricted);

    restrictedBlankPage.checkIfRestrictedButtonIsVisible();
  });
});
