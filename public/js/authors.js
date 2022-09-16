const authors = [
  { lastName: "Butler", otherNames: "Octavia E." },
  { lastName: "Jemisin", otherNames: "N. K." },
  { lastName: "Dick", otherNames: "Philip K." },
];

function showContent() {
  const temp = document.getElementsByTagName("template")[0];
  const contentDiv = document.getElementById("content");
  authors.forEach(author => {
    const cloneDiv = temp.content.cloneNode(true);
    cloneDiv.querySelector('.author').innerText = `${author.otherNames} ${author.lastName}`;
    contentDiv.appendChild(cloneDiv);
  });
}

showContent();
