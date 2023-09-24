const items = ['pizza 1', 'pizza 2', 'pizza 3'];
items.push('pizza 4');
items[1] = 'margarita';
items.splice(0, 2);
console.log(items);