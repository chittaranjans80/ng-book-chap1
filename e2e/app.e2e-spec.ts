import { NgBookChap1Page } from './app.po';

describe('ng-book-chap1 App', function() {
  let page: NgBookChap1Page;

  beforeEach(() => {
    page = new NgBookChap1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
