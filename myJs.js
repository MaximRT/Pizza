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
    console.log(items);
}

function edit(id, newPizzaName) {
    const indexItem = items.findIndex(res => res.id === id);
    items[indexItem].title = newPizzaName;
    console.log(items);
}

function remove(id) {
    items = items.filter(res => res.id !== id);
    console.log(items);
}

function markAsSelected(id) {
    const indexItem = items.findIndex(res => res.id === id);

    items[indexItem].selected = !items[indexItem].selected; 

    console.log(items);
}

console.log(items);