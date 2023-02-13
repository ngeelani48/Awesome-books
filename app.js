// Button for the form section

// /* eslint-disable */

const addButton = document.querySelector('.submit');

// Div element for the bookshelf
const bookshelf = document.querySelector('.bookshelf');
const title = document.getElementById('title');
const author = document.getElementById('author');

// The collection that holds the author and the title
const books = [];

// Function template that creates the 'p' elements
function creation(element, text, parent) {
  const item = document.createElement(element);
  item.innerHTML = text;
  parent.appendChild(item);
}

// Event listener that appends the button to the html element
/* eslint-disable */
addButton.addEventListener('click', () => {
  if (title.value !== '' || author.value !== '') {
    const wrapper = document.createElement('div');
    bookshelf.appendChild(wrapper);
    creation('p', title.value, wrapper);
    creation('p', author.value, wrapper);
    createRemove('remove', wrapper);
    localStorages();
    title.value = '';
    author.value = '';
  }
});

// Function that stores the data to the local storage
function localStorages() {
  books.push({ Title: title.value, Author: author.value });
  const stringified = JSON.stringify(books);
  localStorage.setItem('data', stringified);
}

// Function that removes the data when the user presses the remove button
function createRemove(text, parent) {
  const removeButton = document.createElement('button');
  removeButton.textContent = text;
  removeButton.addEventListener('click', () => {
    bookshelf.removeChild(parent);
    localStorage.removeItem('data');
  });
  parent.appendChild(removeButton);
}

// Function to get the data from LocalStorage and
// Append them back to the html
function recover() {
  const data = JSON.parse(localStorage.getItem('data'));
  for (let i = 0; i < data.length; i++) {
    creation('p', data[i].Title, bookshelf);
    creation('p', data[i].Author, bookshelf);
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'remove';
    bookshelf.appendChild(removeButton);
  }
}

// After deletion, the local storage needs to be
// Updated. This function does that
/* eslint-enable */

// On browser interruption, the data is saved.
window.onload = recover;
