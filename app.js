//Button for the form section
let addButton = document.querySelector("#button");

// Div element for the bookshelf
let bookshelf = document.querySelector("#bookshelf");

let title = document.querySelector("#title");
let author = document.querySelector("#author");
let arr = [];

addButton.addEventListener("click", function () {
  let titleText = title.value;
  let authorText = author.value;

  bookshelf.innerHTML = titleText
  bookshelf.innerHTML = authorText

  arr.push(titleText);
  arr.push(authorText);
});

console.log(arr);


