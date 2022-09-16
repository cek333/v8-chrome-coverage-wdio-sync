const LandingPage = require('../pageobjects/landing.page');
const GenresPage = require('../pageobjects/genres.page');

describe('Navigate to Genres Page from Landing Page', () => {
  it('should navigate to genres page', async () => {
    await LandingPage.open();
    await LandingPage.selectLink('Genres');
    
    await expect(GenresPage.title).toHaveTextContaining('Library: Genres');
  });

  it('should add new genre', async () => {
    await GenresPage.open();
    await expect(GenresPage.title).toHaveTextContaining('Library: Genres');

    await GenresPage.addGenre('Coverage');
    await expect(GenresPage.allGenres).toHaveTextContaining('Coverage');
  });
});
