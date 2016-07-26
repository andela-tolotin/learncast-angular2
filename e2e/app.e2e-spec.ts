import { LearningSystemPage } from './app.po';

describe('learning-system App', function() {
  let page: LearningSystemPage;

  beforeEach(() => {
    page = new LearningSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
