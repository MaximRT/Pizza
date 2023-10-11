let items = [];

const list = document.querySelector('.list');
const addPizzaForm = document.querySelector('.add-pizza-form');

function handleSubmit(e) {

    e.preventDefault();

    const title = e.currentTarget.title.value;
    const price = e.currentTarget.price.value;
    const image = e.currentTarget.image.value;
    const description = e.currentTarget.description.value;

    if (!title || !price || !image || !description) return;

    const item = {
        title,
        price,
        image,
        description,
        selected: false,
        id: Date.now(),
    }

    items.push(item);
    e.currentTarget.reset();

    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
    const html = items.map(item => {
        return (
          `
            <li class='pizza-item'>
              <button value="${item.id}" class='delete'>&times;</button>
              <div class='pizza-item-image'>
                <img src="${item.image}" alt="${item.title}"/>
              </div>
              <div class='pizza-item-details'>
                <div class='pizza-item-details-top'>
                  <div class='itemHeader'>
                    <input type='checkbox' />
                    <span class='itemName'>${item.title}</span>
                  </div>
                  <span class='itemPrice'>${item.price}</span>
                </div>
                <span class='pizza-item-details-bottom'>${item.description}</span>
              </div>
            </li>
          `
        )
      }).join('');

      list.innerHTML = html;
}

function edit(id, newPizzaName) {
    const indexItem = items.findIndex(res => res.id === id);
    items[indexItem].title = newPizzaName;

    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function remove(id) {
    items = items.filter(res => res.id !== id);

    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsSelected(id) {
    const indexItem = items.findIndex(res => res.id === id);

    items[indexItem].selected = !items[indexItem].selected; 

    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function selectPizzas() {
    let checkedPizzas = 0;
    let itemsChecked = [];

    items.forEach(res => {
        if (res.selected === true)
            checkedPizzas++;
    });

    if (checkedPizzas === items.length) {
        itemsChecked = items.map(res => {
            return {...res, selected: false}
        });
    } else {
        itemsChecked = items.map(res => {
            return {...res, selected: true}
        });
    }
    
    items = itemsChecked;
    
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

addPizzaForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);