const LandingPage = require('../pageobjects/landing.page');
const BooksPage = require('../pageobjects/books.page');

describe('Navigate to Books Page from Landing Page', () => {
  it('should navigate to books page', async () => {
    await LandingPage.open();
    await LandingPage.selectLink("Books");
    
    await expect(BooksPage.title).toHaveTextContaining("Library: Books");
  });
});
