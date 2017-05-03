import { SalsafrontPage } from './app.po';

describe('salsafront App', () => {
  let page: SalsafrontPage;

  beforeEach(() => {
    page = new SalsafrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
