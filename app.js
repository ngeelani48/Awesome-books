

/* eslint disable */
let bookCollection = document.querySelector('.bookshelf');
let addButton = document.querySelector('.submit')
let titleInput = document.getElementById('title')
let authorInput = document.getElementById('author')

let books = [];


addButton.addEventListener('click', function(){
  let titletext = titleInput.value;
  let authorText = authorInput.value

  books.push({title: titletext, author: authorText})  
  let items = '';

  books.forEach((item, index) => {
     items+=  
    `<div class="coll${index}">
    <p>${item.title}</p>
    <p>${item.author}</p>
    <button onclick="removeItem(${index})">remove</button>
    </div>`;
  })

  bookCollection.innerHTML = items
  saveData()
  titleInput.value = ''
  authorInput.value = ''
})

function saveData() {
  let stringify = JSON.stringify(books);
  localStorage.setItem('data', stringify)
}

function removeItem(i) {

books.splice(i, 1)

let items = ''
books.forEach((item, index) => {
 items+=  
 `<div class="coll${index}">
 <p>${item.title}</p>
 <p>${item.author}</p>
 <button onclick="removeItem(${index})">remove</button>
 </div>`;
})
bookCollection.innerHTML = ''
bookCollection.innerHTML = items

  // books =  books.filter(x=> books.indexOf(x) !== i);
 let stringify = JSON.stringify(books);
 stringify == '[]'? stringify = '': 0;
 localStorage.setItem('data', stringify)

}

