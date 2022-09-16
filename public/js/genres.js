import { getGenres, addGenre } from "./api.js";

function showContent() {
  const temp = document.getElementsByTagName("template")[0];
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
  getGenres().forEach(genre => {
    const cloneDiv = temp.content.cloneNode(true);
    cloneDiv.querySelector(".genre").innerText = genre;
    contentDiv.appendChild(cloneDiv);
  });
}

function handleSubmit(evt) {
  evt.preventDefault();
  const formData = evt.target;
  const newGenre = formData["newgenre"].value.trim();
  addGenre(newGenre);
  showContent();
}

const formDiv = document.getElementsByTagName("form")[0];
formDiv.addEventListener("submit", handleSubmit);
showContent();
