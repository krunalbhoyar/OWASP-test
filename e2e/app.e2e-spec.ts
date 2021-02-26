import { AlphaPage } from './app.po';

describe('alpha App', () => {
  let page: AlphaPage;

  beforeEach(() => {
    page = new AlphaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
