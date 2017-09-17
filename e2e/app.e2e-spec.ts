import { WiezenPage } from './app.po';

describe('wiezen App', () => {
  let page: WiezenPage;

  beforeEach(() => {
    page = new WiezenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
