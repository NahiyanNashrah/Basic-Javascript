const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const itemArray = JSON.parse(localStorage.getItem('items'))|| []; //the itemArray will be available from localstorage after page load

function addItem(e){
    e.preventDefault(); //stop page reloading
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text, // text : text
        done : false
    };
    itemArray.push(item);
    populateList(itemArray,itemsList);
    localStorage.setItem('items',JSON.stringify(itemArray)); //converts js object into string since localstorage stores only string values
    this.reset(); //clears text from the input box when add item button is clicked
}

function populateList (plates = [], platesList){
   platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type = "checkbox" data-index = ${i} id = "item${i}" ${plate.done ? 'checked' : ''} />
            <label for = "item${i}">${plate.text}</label>
        </li>
        `;
    }).join('');
}

//ensures data persistency even after page loading
function updateCheck(e){
    if(!e.target.matches('input'))return;
    const id = e.target.dataset.index;
    itemArray[id].done = !itemArray[id].done;
    populateList(itemArray,itemsList);
    localStorage.setItem('items',JSON.stringify(itemArray));
}
addItems.addEventListener('submit',addItem);
itemsList.addEventListener('click',updateCheck);
populateList(itemArray, itemsList);
