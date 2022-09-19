const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AuthorsPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputLastName () {
    return $('input[name="lastname"]');
  }

  get inputOtherNames () {
    return $('input[name="othernames"]');
  }

  get btnSubmit () {
    return $('input[type="submit"]');
  }

  get title () {
    return $('h1');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  addAuthor (lastname, othernames) {
    this.inputLastName.setValue(lastname);
    this.inputOtherNames.setValue(othernames);
    this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open () {
    return super.open('authors');
  }
}

module.exports = new AuthorsPage();
