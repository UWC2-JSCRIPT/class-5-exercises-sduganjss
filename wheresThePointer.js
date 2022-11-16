// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const tbodyItem = document.getElementsByTagName('tbody')[0];

tbodyItem.addEventListener('click', e => {
    let td = e.target;

    td.innerHTML = `${e.x} , ${e.y}`;
})

