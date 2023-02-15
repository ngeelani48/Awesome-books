let navigationItemsOne = document.querySelector(".a");
let navigationItemsTwo = document.querySelector(".b");
let navigationItemsThree = document.querySelector(".c");
let form = document.querySelector("form");
let bookshelf = document.getElementById("bookshelf");
let heading = document.querySelector('.heading')

navigationItemsOne.addEventListener("click", function () {
  navigationItemsOne.style.color = "#375E81";
  navigationItemsTwo.style.color = "black";
  navigationItemsThree.style.color = "black";
  navigationItemsOne.style.borderRightColor = "black";

  form.style.display = "none";
  contact.style.display = "none";
  bookshelf.style.display = "block";
  heading.style.display = 'block'
});

navigationItemsTwo.addEventListener("click", function () {
  navigationItemsOne.style.color = "black";
  navigationItemsTwo.style.color = "#375E81";
  navigationItemsThree.style.color = "black";
  navigationItemsTwo.style.borderRightColor = "black";

  contact.style.display = "none";
  form.style.display = "block";
  bookshelf.style.display = "none";
  heading.style.display = 'block'
});

navigationItemsThree.addEventListener("click", function () {
  navigationItemsOne.style.color = "black";
  navigationItemsTwo.style.color = "black";
  navigationItemsThree.style.color = "#375E81";
  navigationItemsThree.style.borderRightColor = "black";

  form.style.display = "none";
  contact.style.display = "flex";
  bookshelf.style.display = "none";
  heading.style.display = 'none'
});

function defaultPage() {
  form.style.display = "none";
  contact.style.display = "none";
  navigationItemsOne.style.color = "#375E81";
  navigationItemsOne.style.borderRightColor = "black";
}

window.onload = defaultPage;
