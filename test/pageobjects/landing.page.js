const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
  /**
   * define selectors using getter methods
   */
  get title () {
    return $('h1');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  selectLink (target) {
    $(`=${target}`).click();
  }

  // Inherits open() method
}

module.exports = new LandingPage();
