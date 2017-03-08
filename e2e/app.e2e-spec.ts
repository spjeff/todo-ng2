import { OriginalPage } from './app.po';

describe('original App', function() {
  let page: OriginalPage;

  beforeEach(() => {
    page = new OriginalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
