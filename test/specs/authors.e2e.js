const LandingPage = require('../pageobjects/landing.page');
const AuthorsPage = require('../pageobjects/authors.page');

describe('Navigate to Authors Page from Landing Page', () => {
  it('should navigate to authors page', () => {
    LandingPage.open();
    LandingPage.selectLink("Authors");
    
    expect(AuthorsPage.title).toHaveTextContaining("Library: Authors");
  });
});
