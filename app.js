// const bookCollection = document.querySelector('.bookshelf');
// const addButton = document.querySelector('.submit');
// const titleInput = document.getElementById('title');
// const authorInput = document.getElementById('author');

// const books = [];

// function saveData() {
//   const stringify = JSON.stringify(books);
//   localStorage.setItem('data', stringify);
// }

// function removeItem(i) {
//   books.splice(i, 1);

//   let items = '';
//   books.forEach((item, index) => {
//     items += `<div class="coll${index} collection">
//  <div class='bookinfo'>
//  <p class='title'>${item.title} by</p>
//  <p class='author'>${item.author}</p>
//  </div>
//  <button class='remove' onclick="removeItem(${index})">remove</button>
//  </div>`;
//   });

//   bookCollection.innerHTML = '';
//   bookCollection.innerHTML = items;

//   let stringify = JSON.stringify(books);
//   if (stringify === '[]') {
//     stringify = '';
//   }

//   localStorage.setItem('data', stringify);
// }
// class BookCollection {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }

//   getTitle() {
//     return this.title.value;
//   }

//   getAuthor() {
//     return this.author.value;
//   }
// }

// const newBook = new BookCollection(titleInput, authorInput);

// addButton.addEventListener('click', () => {
//   const titletext = newBook.getTitle();
//   const authorText = newBook.getAuthor();

//   if (titletext === '' || authorText === '') {
//     return;
//   }

//   books.push({ title: titletext, author: authorText });
//   let items = '';

//   books.forEach((item, index) => {
//     items += `<div class="coll${index} collection">
//     <div class='bookinfo'>
//     <p class='title'>"${item.title}" by</p>
//     <p class='author'>${item.author}</p>
//     </div>
//     <button class='remove' onclick="removeItem(${index})">remove</button>
//     </div>`;
//   });

//   bookCollection.innerHTML = items;

//   saveData();
//   titleInput.value = '';
//   authorInput.value = '';
// });
// removeItem();

class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.addBook = this.addBook.bind(this);
    this.removeBook = this.removeBook.bind(this);
  }

  addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (title && author) {
      this.books.push({ title, author });
      localStorage.setItem('books', JSON.stringify(this.books));
      this.displayBooks();
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    }
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  displayBooks() {
    const bookshelf = document.getElementById('bookshelf');
    bookshelf.innerHTML = '';
    this.books.forEach((book, index) => {
      const booklist = document.createElement('li');
      const bookinfo = document.createElement('h3');
      const removeButton = document.createElement('button');
      bookinfo.textContent = `${book.title} by ${book.author}`;
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => this.removeBook(index));
      removeButton.classList.add('remove');
      booklist.classList.add('bookinfo');
      booklist.appendChild(bookinfo);
      booklist.appendChild(removeButton);
      bookshelf.appendChild(booklist);
    });
  }
}

const bookCollection = new BookCollection();
document
  .getElementById('submit')
  .addEventListener('click', bookCollection.addBook);
bookCollection.displayBooks();