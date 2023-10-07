let items = [
    {title: 'Margarita', selected: true, id: 111},
    {title: 'Pepperoni', selected: false, id: 222},
    {title: 'Cheese', selected: true, id: 333},
];

function add(newPizzaName) {
    const item = {
        title: newPizzaName,
        selected: false,
        id: Date.now(),
    }

    items.push(item);
    displayItems();
}

function edit(id, newPizzaName) {
    const indexItem = items.findIndex(res => res.id === id);
    items[indexItem].title = newPizzaName;
    displayItems();
}

function remove(id) {
    items = items.filter(res => res.id !== id);
    displayItems();
}

function markAsSelected(id) {
    const indexItem = items.findIndex(res => res.id === id);

    items[indexItem].selected = !items[indexItem].selected; 

    displayItems();
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
    displayItems();
}


function displayItems() {
    items.forEach(res => console.log(res));
}