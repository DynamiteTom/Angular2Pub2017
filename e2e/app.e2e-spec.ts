import { Simple1Page } from './app.po';

describe('simple1 App', function() {
  let page: Simple1Page;

  beforeEach(() => {
    page = new Simple1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
