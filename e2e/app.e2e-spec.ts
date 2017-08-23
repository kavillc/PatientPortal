import { AngularJs2Page } from './app.po';

describe('angular-js2 App', () => {
  let page: AngularJs2Page;

  beforeEach(() => {
    page = new AngularJs2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
