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

function showContent() {
  const temp = document.getElementsByTagName("template")[0];
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
  authors.forEach(author => {
    const cloneDiv = temp.content.cloneNode(true);
    cloneDiv.querySelector(".author").innerText = `${author.otherNames} ${author.lastName}`;
    contentDiv.appendChild(cloneDiv);
  });
}

function handleSubmit(evt) {
  evt.preventDefault();
  const formData = evt.target;
  const lastName = formData["lastname"].value.trim();
  const otherNames = formData["othernames"].value.trim();
  authors.push({ lastName, otherNames });
  showContent();
}

const formDiv = document.getElementsByTagName("form")[0];
formDiv.addEventListener("submit", handleSubmit);
showContent();
