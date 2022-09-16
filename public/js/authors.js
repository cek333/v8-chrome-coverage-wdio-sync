const authors = [
  { lastName: "Butler", otherNames: "Octavia E." },
  { lastName: "Jemisin", otherNames: "N. K." },
  { lastName: "Dick", otherNames: "Philip K." },
];

export const getAuthors = () => authors;

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
