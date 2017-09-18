import { Eng2017Page } from './app.po';

describe('eng2017 App', function() {
  let page: Eng2017Page;

  beforeEach(() => {
    page = new Eng2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
