let bookshelf = document.querySelector(".bookshelf");
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let addButton = document.getElementById("add");

let books = [];

function appendBooks() {
  let titleValue = titleInput.value;
  let authorValue = authorInput.value;

  let collection = document.createElement("div");
  collection.classList.add("collection");
  bookshelf.appendChild(collection);
 let index = Array.from(bookshelf.children).indexOf(collection);

  let title = document.createElement("p");
  title.classList.add("title");
  title.innerHTML = titleValue;

  let author = document.createElement("p");
  author.classList.add("author");
  author.innerHTML = authorValue;

  let removeButton = document.createElement("button");
  removeButton.classList.add("remove");
  removeButton.innerHTML = "remove";

  removeButton.onclick = () => {
    let item = document.querySelectorAll('.collection');
    bookshelf.removeChild(item[index]);
  }

  collection.appendChild(title);
  collection.appendChild(author);
  collection.appendChild(removeButton);

  titleInput.value = "";
  authorInput.value = "";

  toLocalStorage(titleValue, authorValue);
}



function toLocalStorage(title, author) {
  books.push({ Title: title, Author: author });

  let stringify = JSON.stringify(books);

  localStorage.setItem("books", stringify);
}

function removeItem(id) {
  let item = bookshelf.children[id];
  bookshelf.removeChild(item);
}





addButton.addEventListener("click", appendBooks);
