const LandingPage = require('../pageobjects/landing.page');
const AuthorsPage = require('../pageobjects/authors.page');

describe('Navigate to Authors Page from Landing Page', () => {
  it('should navigate to authors page', async () => {
    await LandingPage.open();
    await LandingPage.selectLink("Authors");
    
    await expect(AuthorsPage.title).toHaveTextContaining("Library: Authors");
  });
});
