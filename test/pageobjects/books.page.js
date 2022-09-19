const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BooksPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputTitle () {
    return $('input[name="title"]');
  }

  get inputAuthor () {
    return $('select[name="author"]');
  }

  get inputGenres () {
    return $('select[name="genres"]');
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
  addBook (title, authorIdx, genreIdx) {
    this.inputTitle.setValue(title);
    this.inputAuthor.selectByIndex(authorIdx);
    this.inputGenres.selectByIndex(genreIdx);
    this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open () {
    return super.open('books');
  }
}

module.exports = new BooksPage();
