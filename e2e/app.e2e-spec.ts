import { MalpinsoftSitePage } from './app.po';

describe('malpinsoft-site App', () => {
  let page: MalpinsoftSitePage;

  beforeEach(() => {
    page = new MalpinsoftSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
