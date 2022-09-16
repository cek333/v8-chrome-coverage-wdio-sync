import {
  addBook,
  getBooks,
  getFullName,
  getGenres,
  getAuthors,
} from "./api.js";

let authorsCache;

function populateFormOptions() {
  const authorSel = document.querySelector('select[name="author"]');
  authorsCache = getAuthors();
  authorsCache.forEach((author, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.innerText = getFullName(author);
    authorSel.appendChild(opt);
  });
  
  const genreSel = document.querySelector('select[name="genres"]');
  getGenres().forEach(genre => {
    const opt = document.createElement("option");
    opt.value = genre;
    opt.innerText = genre;
    genreSel.appendChild(opt);
  });
}

function showContent() {
  const temp = document.getElementsByTagName("template")[0];
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
  getBooks().forEach(book => {
    const cloneDiv = temp.content.cloneNode(true);
    cloneDiv.querySelector(".title").innerText = book.title;
    cloneDiv.querySelector(".author").innerText = getFullName(book.author);
    cloneDiv.querySelector(".genres").innerText = book.genres.join(", ");
    contentDiv.appendChild(cloneDiv);
  });
}

function handleSubmit(evt) {
  evt.preventDefault();
  const formData = evt.target;
  const title = formData["title"].value;
  const author = authorsCache[Number(formData["author"].value)];
  const genres = [ formData["genres"].value ]; // how to get array of values!?!
  addBook({ title, author, genres });
  showContent();
}

populateFormOptions();
const formDiv = document.getElementsByTagName("form")[0];
formDiv.addEventListener("submit", handleSubmit);
showContent();
