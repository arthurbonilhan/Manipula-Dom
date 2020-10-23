// MENU 

const divBar = document.querySelectorAll('div.btn-group-vertical')
divBar[0].setAttribute('style', 'display: contents;')

const divBtn = document.querySelectorAll('div.btn-group-vertical > button')
divBtn.forEach(e => {
    e.setAttribute('style', 'margin: 0 7px 0 2px; max-width: 15%; border-radius: 5px;');
})


// HEADER 
const divHeader = document.getElementsByClassName('jumbotron')
divHeader[0].setAttribute('style', 'text-align: right; background-color: #596979;')

const aHeader = document.querySelectorAll('div.jumbotron > a')
aHeader.forEach(e => {
    e.setAttribute('class', 'btn btn-lg btn-success');
})


// CARDS 
const cardEnd = document.querySelectorAll('div.card-body > a')
const cardOne = cardEnd[3]
cardOne.setAttribute('class', 'btn btn-success');

const card = document.querySelectorAll('div.row > div.col-lg-3')
card.forEach(e => {
    e.replaceWith(card[3], card[0], card[2], card[1]);
})


// LISTA

const lista = document.querySelectorAll('div.col-lg-4 > ul.list-group')

var item1 = document.createElement('li')
item1.textContent = "Quarto item";
item1.setAttribute('class', 'list-group-item active')

var item2 = document.createElement('li')
item2.textContent = "Quinto item";
item2.setAttribute('class', 'list-group-item')

lista.forEach(e => {
    e.replaceWith(lista[0], item1, item2);
})
const remove = document.querySelectorAll('div.col-lg-4 > ul.list-group > li')
remove[0].setAttribute('class', 'list-group-item')








