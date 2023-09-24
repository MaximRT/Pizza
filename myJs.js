const items = ['pizza 1', 'pizza 2', 'pizza 3'];
items[1] = 'margarita';

function add(pizza) {
    items.push(pizza);
    console.log(items);
}

function edit(position, newName) {
    items[position] = newName;
    console.log(items);
}

function remove(position) {
    items.splice(position, 1);
    console.log(items);
}

console.log(items);