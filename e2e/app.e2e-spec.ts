import { Angular2TutorialMassimillianPage } from './app.po';

describe('angular2-tutorial-massimillian App', function() {
  let page: Angular2TutorialMassimillianPage;

  beforeEach(() => {
    page = new Angular2TutorialMassimillianPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
