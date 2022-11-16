// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
//create variable for last paragraph
const lastP = document.getElementsByTagName('p')[0];
//create variable for new link element
const linkBuyNow = document.createElement('a');
//add text for the link
const linkText = document.createTextNode('Buy Now!');
//add text to the link
linkBuyNow.appendChild(linkText);
//set css attribute
linkBuyNow.setAttribute('id', 'cta');
//insert right after the paragraph
lastP.parentNode.insertBefore(linkBuyNow, lastP.nextSibling)


// Access (read) the data-color attribute of the <img>,
// log to the console

const imgCar = document.getElementsByTagName('img')[0];

console.log(imgCar.dataset.color);


// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const thirdListItem = document.getElementsByTagName('li')[2];
thirdListItem.setAttribute('class', 'highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
//get main body element
const mainBody = document.getElementsByTagName('main')[0];
//remove last paragraph element
mainBody.removeChild(lastP);
