const bookCollection = document.querySelector('.bookshelf');
const addButton = document.querySelector('.submit');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

const books = [];

// Templete for book collection

class BookCollection {
  constructor(title,author){
    this.title=title;
    this.author=author;
  }
};

addButton.addEventListener('click', () => {
  const titletext = titleInput.value;
  const authorText = authorInput.value;

  let book= new BookCollection(titletext,authorText);

  books.push(book);
  let items = '';

  books.forEach((item, index) => {
    items
    += `<div class="coll${index}">
    <p>${item.title}</p>
    <p>${item.author}</p>
    <button onclick="removeItem(${index})">remove</button>
    </div>`;
  });

  bookCollection.innerHTML = items;
  /* eslint-disable no-use-before-define */
  saveData();
  titleInput.value = '';
  authorInput.value = '';
});

/* eslint-disable no-use-before-define */
function saveData() {
  const stringify = JSON.stringify(books);
  localStorage.setItem('data', stringify);
}

/* eslint-disable no-unused-vars */
function removeItem(i) {
  books.splice(i, 1);

  let items = '';
  books.forEach((item, index) => {
    items
 += `<div class="coll${index}">
 <p>${item.title}</p>
 <p>${item.author}</p>
 <button onclick="removeItem(${index})">remove</button>
 </div>`;
  });
  bookCollection.innerHTML = '';
  bookCollection.innerHTML = items;

  // books =  books.filter(x=> books.indexOf(x) !== i);
  let stringify = JSON.stringify(books);
  if (stringify === '[]') {
    stringify = '';
  }

  localStorage.setItem('data', stringify);
}
