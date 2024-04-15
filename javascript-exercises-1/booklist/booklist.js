// Copy the array of books from the previous exercise.
const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
for (const i = 0; i < books.length; i++) {
  const book = books[i];
  const paragraph = document.createElement('p');
  const bookInfo = book.title + ' by ' + book.author;
  paragraph.textContent = bookInfo;
  document.body.appendChild(paragraph);
}

// Bonus: Use a ul and li to display the books.
const ulElement = document.createElement("ul");
ulElement.id = "bookList";
document.body.appendChild(ulElement);
const ulElement = document.getElementById("bookList");
for (const i = 0; i < books.length; i++) {
  const book = books[i];
  const liElement = document.createElement("li");
  const bookInfo = book.title + " by " + book.author;
  liElement.textContent = bookInfo;
  const imgElement = document.createElement("img");
  imgElement.src = book.img;
  imgElement.alt = book.title + " Cover";
  liElement.appendChild(imgElement);
  ulElement.appendChild(liElement);
  if (book.alreadyRead) {
    liElement.style.color = "blue";
  } else {
    liElement.style.color = "pink";
  }
}
