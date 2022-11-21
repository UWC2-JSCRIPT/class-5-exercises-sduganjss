// When a user clicks the + element, the count should increase by 1 on screen.
let counter = 0;

const plusEl = document.getElementById('plusButton');
const minusEl = document.getElementById('minusButton');
const counterP = document.getElementById('counter');

counterP.innerText = counter;

plusEl.addEventListener('click', (e) =>{
    counter++;
    counterP.innerText = counter;
});
// When a user clicks the – element, the count should decrease by 1 on screen.
minusEl.addEventListener('click', (e) =>{
    counter--;
    counterP.innerText = counter;
});
