// If an li element is clicked, toggle the class "done" on the <li>
const liList = document.getElementsByClassName('today-list')[0];
const delButton = document.getElementsByClassName('delete')[0];

console.log(liList);

liList.addEventListener('click', e => {
  let liItem = e.target;

  liItem.setAttribute('class', 'li.done');
})

// If a delete link is clicked, delete the li element / remove from the DOM
delButton.addEventListener('click', () => {
   liList.removeChild(delButton.parentElement);
})

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
/*
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
};*/
