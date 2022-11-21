// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const main = body.firstElementChild;

console.log(main);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const mainElement = ul.parentElement;

console.log(mainElement.parentElement);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');

const thirdListItem = p.previousElementSibling.children[2];

console.log(thirdListItem);
