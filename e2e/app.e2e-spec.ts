import { ReviewManagementPage } from './app.po';

describe('review-management App', () => {
  let page: ReviewManagementPage;

  beforeEach(() => {
    page = new ReviewManagementPage();
  });

  it('should display message saying Review Management', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Review Management');
  });
});
