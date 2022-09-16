import { addAuthor, getAuthors, getAuthorsFullName } from "./api.js";

function showContent() {
  const temp = document.getElementsByTagName("template")[0];
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
  getAuthorsFullName().forEach(authorName => {
    const cloneDiv = temp.content.cloneNode(true);
    cloneDiv.querySelector(".author").innerText = authorName;
    contentDiv.appendChild(cloneDiv);
  });
}

function handleSubmit(evt) {
  evt.preventDefault();
  const formData = evt.target;
  const lastName = formData["lastname"].value.trim();
  const otherNames = formData["othernames"].value.trim();
  addAuthor({ lastName, otherNames });
  showContent();
}

const formDiv = document.getElementsByTagName("form")[0];
formDiv.addEventListener("submit", handleSubmit);
showContent();
