import { ReviewManagementPage } from './app.po';

describe('review-management App', () => {
  let page: ReviewManagementPage;

  beforeEach(() => {
    page = new ReviewManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
