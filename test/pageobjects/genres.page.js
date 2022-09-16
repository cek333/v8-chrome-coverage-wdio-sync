

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GenresPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputGenre () {
        return $('input[name="newgenre"]');
    }

    get btnSubmit () {
        return $('input[type="submit"]');
    }

    get title () {
        return $('h1');
    }

    get allGenres () {
        return $('#content');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async addGenre (newgenre) {
        await this.inputGenre.setValue(newgenre);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('genres');
    }
}

module.exports = new GenresPage();
