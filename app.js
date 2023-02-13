//Button for the form section
let addButton = document.querySelector(".submit");
// Div element for the bookshelf
let bookshelf = document.querySelector(".bookshelf");

let title = document.getElementById("title");
let author = document.getElementById("author");

// The collection that holds the author and the title
let books = [];

function creation(element, text, parent) {
  let item = document.createElement(element);
  item.innerHTML = text;
  parent.appendChild(item);
}

addButton.addEventListener("click", function () {
  creation("p", title.value, bookshelf);
  creation("p", author.value, bookshelf);

  let removeButton = document.createElement("button");
  removeButton.innerHTML = "remove";
  bookshelf.appendChild(removeButton);
removeButton.setAttribute('id','remove-button');
  books.push({ Title: title.value, Author: author.value });

  let stringified = JSON.stringify(books);

  localStorage.setItem("data", stringified);

  title.value = "";
  author.value = "";
});

// Function to get the data from LocalStorage and
// Append them back to the html

function recover() {
  let data = JSON.parse(localStorage.getItem("data"));

  for (let i = 0; i < data.length; i++) {
    creation("p", data[i].Title, bookshelf);
    creation("p", data[i].Author, bookshelf);

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "remove";
    bookshelf.appendChild(removeButton);
  }
}
//remove button functioning
let removebook=document.getElementById("#remove-button");

window.onload = recover;
