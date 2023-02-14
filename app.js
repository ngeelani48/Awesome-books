const bookCollection = document.querySelector(".bookshelf");
const addButton = document.querySelector(".submit");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");

const books = [];

addButton.addEventListener("click", () => {
  const titletext = titleInput.value;
  const authorText = authorInput.value;

  if(titletext === '' || authorText == '') {
    return
  }

  books.push({ title: titletext, author: authorText });
  let items = "";

  books.forEach((item, index) => {
    items += `<div class="coll${index} collection">
    <div class='bookinfo'>
    <p class='title'>"${item.title}" by</p>
    <p class='author'>${item.author}</p>
    </div>
    <button class='remove' onclick="removeItem(${index})">remove</button>
    </div>`;
  });

  bookCollection.innerHTML = items;
  /* eslint-disable no-use-before-define */
  saveData();
  titleInput.value = "";
  authorInput.value = "";
});

/* eslint-disable no-use-before-define */
function saveData() {
  const stringify = JSON.stringify(books);
  localStorage.setItem("data", stringify);
}

/* eslint-disable no-unused-vars */
function removeItem(i) {
  books.splice(i, 1);

  let items = "";
  books.forEach((item, index) => {
    items += `<div class="coll${index} collection">
 <div class='bookinfo'>
 <p class='title'>${item.title} by</p>
 <p class='author'>${item.author}</p>
 </div>
 <button class='remove' onclick="removeItem(${index})">remove</button>
 </div>`;
  });

  bookCollection.innerHTML = "";
  bookCollection.innerHTML = items;

  let stringify = JSON.stringify(books);
  if (stringify === "[]") {
    stringify = "";
  }

  localStorage.setItem("data", stringify);
}
