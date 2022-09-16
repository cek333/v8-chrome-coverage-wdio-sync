const genres = [
  "Comedy", "Science Fiction", "Thriller",
  "Biography", "Romance", "Travel",
  "Comics", "Horror", "Mystery", "Fantasy",
  "Fiction", "Historical",
];

export const getGenres = () => genres;

function showContent() {
  const temp = document.getElementsByTagName("template")[0];
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
  genres.forEach(genre => {
    const cloneDiv = temp.content.cloneNode(true);
    cloneDiv.querySelector(".genre").innerText = genre;
    contentDiv.appendChild(cloneDiv);
  });
}

function handleSubmit(evt) {
  evt.preventDefault();
  const formData = evt.target;
  const newGenre = formData["newgenre"].value.trim();
  genres.push(newGenre);
  showContent();
}

const formDiv = document.getElementsByTagName("form")[0];
formDiv.addEventListener("submit", handleSubmit);
showContent();
