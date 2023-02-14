// Button for the form section

// /* eslint-disable */

const addButton = document.querySelector(".submit");

// Div element for the bookshelf
const bookshelf = document.querySelector(".bookshelf");
const title = document.getElementById("title");
const author = document.getElementById("author");

// The collection that holds the author and the title
let books = [];

// Function template that creates the 'p' elements
function titleCreation(element, text, parent) {
  const item = document.createElement(element);
  item.classList.add("text");
  item.innerHTML = text;
  parent.appendChild(item);
}

function authorCreation(element, text, parent) {
  const item = document.createElement(element);
  item.classList.add("texty");
  item.innerHTML = text;
  parent.appendChild(item);
}

// Event listener that appends the button to the html element
/* eslint-disable */
addButton.addEventListener("click", () => {
  if (title.value !== "" || author.value !== "") {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    bookshelf.appendChild(wrapper);
    titleCreation("p", title.value, wrapper);
    authorCreation("p", author.value, wrapper);
    createRemove("remove", wrapper);
    toLocalStorage();
    title.value = "";
    author.value = "";
  }
});

// Function that stores the data to the local storage
function toLocalStorage() {
  books.push({ Title: title.value, Author: author.value });
  const stringified = JSON.stringify(books);
  localStorage.setItem("data", stringified);
}

// Function that removes the data when the user presses the remove button
function createRemove(text, parent) {
  const removeButton = document.createElement("button");
  removeButton.textContent = text;

  removeButton.onclick = function () {
    parent.removeChild(removeButton);
    bookshelf.removeChild(parent);
    updated();
  };

  parent.appendChild(removeButton);
}

function updated() {
  books = []
  let bookshelf = document.querySelector(".bookshelf").querySelectorAll('.wrapper');
  let children = bookshelf.querySelectorAll(".text");
  let children2 = bookshelf.querySelectorAll(".texty");
  
  for (let i = 0; i <bookshelf.length; i++) {

    books.push({
      'Title': children[i].textContent,
      'Author': children2[i].textContent,
    });
  }
  let item = JSON.stringify(books);
  localStorage.setItem("data", item);
}

// Function to get the data from LocalStorage and
// Append them back to the html
function recover() {
  const data = JSON.parse(localStorage.getItem("data"));
  for (let i = 0; i < data.length; i++) {
    titleCreation("p", data[i].Title, bookshelf);
    titleCreation("p", data[i].Author, bookshelf);
    const removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    bookshelf.appendChild(removeButton);
  }
}

// On browser interruption, the data is saved.
window.onload = recover;
