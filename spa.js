let navigationWrapper = document.querySelector(".navigation-items");
let navigationItemsOne = document.querySelector(".a");
let navigationItemsTwo = document.querySelector(".b");
let navigationItemsThree = document.querySelector(".c");
let body = document.querySelector('.page1')


navigationItemsOne.addEventListener('click',function() {
    body.style.display =  'none'
})


navigationItemsTwo.addEventListener('click',function() {
    body.style.display =  'block'

})