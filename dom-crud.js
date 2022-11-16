// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const lastP = document.getElementsByTagName('p')[0];

const linkBuyNow = document.createElement('a');

const linkText = document.createTextNode('Buy Now!');

linkBuyNow.appendChild(linkText);

linkBuyNow.setAttribute('id', 'cta');

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
const mainBody = document.getElementsByTagName('main')[0];

mainBody.removeChild(lastP);
