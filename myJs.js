const items = [
    {title: 'Margarita', selected: false},
    {title: 'Pepperoni', selected: false},
    {title: 'Cheese', selected: false},
];

function add(newPizzaName) {
    items.push({title: newPizzaName, selected: false});
    console.log(items);
}

function edit(position, newPizzaName) {
    items[position].title = newPizzaName;
    console.log(items);
}

function remove(position) {
    items.splice(position, 1);
    console.log(items);
}

function markAsSelected(position) {
    const pizzaItem = items[position];

    pizzaItem.selected = !pizzaItem.selected; 

    console.log(items);
}

console.log(items);