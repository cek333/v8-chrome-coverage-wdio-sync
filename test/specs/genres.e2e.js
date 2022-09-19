const LandingPage = require('../pageobjects/landing.page');
const GenresPage = require('../pageobjects/genres.page');

describe('Navigate to Genres Page from Landing Page', () => {
  it('should navigate to genres page', () => {
    LandingPage.open();
    LandingPage.selectLink('Genres');
    
    expect(GenresPage.title).toHaveTextContaining('Library: Genres');
  });

  it('should add new genre', () => {
    GenresPage.open();
    expect(GenresPage.title).toHaveTextContaining('Library: Genres');

    GenresPage.addGenre('Coverage');
    expect(GenresPage.allGenres).toHaveTextContaining('Coverage');
  });
});
