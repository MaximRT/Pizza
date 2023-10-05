const students = ['vasily', 'stas', 'mary', 'alex'];

const comments = [
 {text: 'hello my friend!', id: '111'},
 {text: 'welcome:)', id: '222'},
 {text: 'BAD COMMENT', id: '333'},
 {text: 'glad to see you!', id: '444'},
];


const numbers = [1, 2, 3, 4, 5, 6, 7];

// Mutable
//const numbersSpliced = numbers.splice(0, 1);
// const numbersReverse = numbers.reverse();


// Immutable
//const numbersSliced = numbers.slice(0, 2);
//const numbersReverse = [...numbers].reverse();
// students.push('jon');
//const students2 = [...students, 'jon'];
//students.unshift('victor');
const students3 = ['victor', ...students];

const studentsLeft = students.slice(0, 2);

const studentsRigth = students.slice(2);

const students4 = [...studentsLeft, 'Vika', ...studentsRigth];

const students5 = [...students.slice(0,2), ...students.slice(3)];

console.log(comments);

function removeComment(id, commentsList) {

    const elementIndex = commentsList.findIndex((comment) => comment.id === id);

    return [ ...commentsList.slice(0, elementIndex), ...commentsList.slice(elementIndex + 1)];

} 
