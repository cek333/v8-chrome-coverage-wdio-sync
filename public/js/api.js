const authors = [
  { lastName: "Butler", otherNames: "Octavia E." },
  { lastName: "Jemisin", otherNames: "N. K." },
  { lastName: "Dick", otherNames: "Philip K." },
];

function addAuthor(newAuthor) {
  authors.push(newAuthor);
}

function getAuthors() {
  return authors;
}

function getFullName(author) {
  return `${author.otherNames} ${author.lastName}`;
}

function getAuthorsFullName() {
  return authors.map(author => getFullName(author));
}

//=============================================================================

const genres = [
  "Comedy", "Science Fiction", "Thriller",
  "Biography", "Romance", "Travel",
  "Comics", "Horror", "Mystery", "Fantasy",
  "Fiction", "Historical",
];

function addGenre(newGenre) {
  genres.push(newGenre);
}

function getGenres() {
  return genres;
}

//=============================================================================

const books = [
  {
    title: "Do Androids Dream of Electric Sheep?",
    genres: [ "Science Fiction", "Fantasy" ],
    author: { lastName: "Dick", otherNames: "Philip K." },
  },
  {
    title: "A Scanner Darkly",
    genres: [ "Science Fiction", "Fantasy" ],
    author: { lastName: "Dick", otherNames: "Philip K." },
  },
  {
    title: "Do Androids Dream of Electric Sheep?",
    genres: [ "Science Fiction", "Mystery", "Thriller" ],
    author: { lastName: "Dick", otherNames: "Philip K." },
  },
  {
    title: "Parable of the Sower",
    genres: [ "Science Fiction", "Fantasy" ],
    author: { lastName: "Octavia E.", otherNames: "Butler" },
  },
  {
    title: "Parable of the Talents",
    genres: [ "Science Fiction", "Fantasy" ],
    author: { lastName: "Octavia E.", otherNames: "Butler" },
  },
  {
    title: "Kindred",
    genres: [ "Science Fiction", "Fantasy", "Historical" ],
    author: { lastName: "Octavia E.", otherNames: "Butler" },
  },
  {
    title: "The Hundred Thousand Kingdoms",
    genres: [ "Science Fiction", "Fantasy", "Romance" ],
    author: { lastName: "Jemisin", otherNames: "N. K." },
  },
  {
    title: "The Killing Moon",
    genres: [ "Science Fiction", "Fantasy" ],
    author: { lastName: "Jemisin", otherNames: "N. K." },
  },
  {
    title: "The Fifth Season",
    genres: [ "Science Fiction", "Fantasy" ],
    author: { lastName: "Jemisin", otherNames: "N. K." },
  },  
];

function addBook(newBook) {
  books.push(newBook);
}

function getBooks() {
  return books;
}

//=============================================================================

export {
  addAuthor, getAuthors, getAuthorsFullName, getFullName,
  addGenre, getGenres,
  addBook, getBooks,
};
