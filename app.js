// Button for the form section
let addButton = document.querySelector(".submit");

// Div element for the bookshelf
let bookshelf = document.querySelector(".bookshelf");
let title = document.getElementById("title");
let author = document.getElementById("author");

// The collection that holds the author and the title
let books = [];

// Function template that creates the 'p' elements
function creation(element, text, parent) {
  let item = document.createElement(element);
  item.innerHTML = text;
  parent.appendChild(item);
}

// Event listener that appends the button to the html element
addButton.addEventListener("click", function () {
  if (title.value !== "" || author.value !== "") {
    let wrapper = document.createElement("div");
    bookshelf.appendChild(wrapper);
    creation("p", title.value, wrapper);
    creation("p", author.value, wrapper);
    createRemove("remove", wrapper);
    localStorages();
    title.value = "";
    author.value = "";
  }
});

// Function that stores the data to the local storage
function localStorages() {
  books.push({ Title: title.value, Author: author.value });
  let stringified = JSON.stringify(books);
  localStorage.setItem("data", stringified);
}


// Function that removes the data when the user presses the remove button
function createRemove(text, parent) {
  let removeButton = document.createElement("button");
  removeButton.textContent = text;
  removeButton.addEventListener("click", function () {
    bookshelf.removeChild(parent);
    localStorage.removeItem("data");
  });
  parent.appendChild(removeButton);
}

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

// After deletion, the local storage needs to be
// Updated. This function does that
function updateStorage() {
  }


// On browser interruption, the data is saved.
window.onload = recover;
