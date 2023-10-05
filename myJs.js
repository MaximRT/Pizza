let items = [
    {title: 'Margarita', selected: false, id: 111},
    {title: 'Pepperoni', selected: false, id: 222},
    {title: 'Cheese', selected: false, id: 333},
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

function displayItems() {
    items.forEach(res => console.log(res));
}