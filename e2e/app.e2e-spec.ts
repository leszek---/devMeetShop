import { DevMeetShopPage } from './app.po';

describe('dev-meet-shop App', () => {
  let page: DevMeetShopPage;

  beforeEach(() => {
    page = new DevMeetShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
