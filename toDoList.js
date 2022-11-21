// If an li element is clicked, toggle the class "done" on the <li>
const liList = document.getElementsByClassName('today-list')[0];
const delButton = document.getElementsByClassName('delete')[0];


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
const addButton = document.getElementsByClassName('add-item')[0];

addButton.addEventListener('click', (e) => {
  addListItem(e);
})

const addListItem = function(e) {
  e.preventDefault();
 
    
  const input = this.document.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
//if they hit add and didn't put any text in
  if (text === '') {
    return;
  }
  //create new elements
  const liElement = document.createElement('li');
  const spanElement = document.createElement('span');
  const linkElement = document.createElement('a');
  //set their attributes
  linkElement.setAttribute('class', 'delete');
  //append them together
  linkElement.appendChild(document.createTextNode('Delete'));
  spanElement.appendChild(document.createTextNode(text));
  //add them to the existing list element
  liElement.appendChild(spanElement);
  liElement.appendChild(linkElement);
 
  //now add list element to the ul list
  liList.appendChild(liElement);
  //clear out original text
  input.value  = '';
  //add listener for new delete button
  linkElement.addEventListener('click', () => {
    liList.removeChild(linkElement.parentElement);
 })

};
