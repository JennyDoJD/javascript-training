// Copy the array of books from the previous exercise.
const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    img: 'https://salt.tikicdn.com/cache/w1200/ts/product/bb/8e/21/8622d78f10b85cf520709d8ce29ac983.jpg',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    img: 'https://brianchristian.org/images/The-Most-Human-Human-Paperback-Front-Cover.jpg',
    alreadyRead: true
  }
];

// Iterate through the array of books and append them to the page
// const ul = document.createElement('ul'); // Create a ul element to contain the list of books

// Create a DocumentFragment to contain the list of books
const fragment = document.createDocumentFragment();

books.forEach(book => {
  const li = document.createElement('li'); // Create a li element for each book
  const p = document.createElement('p');
  p.textContent = `${book.title} by ${book.author}`;

  // Bonus: Add an img element for each book on the page
  const img = document.createElement('img');
  img.src = book.img;
  img.classList.add('book-image');
  img.alt = book.title;

  // Bonus: Change the style of the book depending on whether you have read it or not
  if (book.alreadyRead) {
    p.classList.add('book-read');
  }

  li.appendChild(p); // Append the paragraph to the list item
  li.appendChild(img); // Append the image to the list item
  // ul.appendChild(li); // Append the list item to the ul
  fragment.appendChild(li); // Append the list item to the DocumentFragment
});

// document.body.appendChild(ul);
// Append the DocumentFragment containing all books to the body
document.body.appendChild(fragment);
