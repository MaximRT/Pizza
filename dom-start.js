/*
const body = document.querySelector('body');
const divs = document.querySelectorAll('div');
console.log(Array.from(divs));

const form = document.querySelector('.pizza-menu form');
console.log(form);
*/

// header.insertAdjacentText('beforebegin', '*');

// Классы

/*
const myImg = document.querySelector('img');

myImg.classList.add('open');
myImg.classList.add('openView');
myImg.classList.remove('open');
console.log(myImg.classList);

myImg.alt = 'Cool Image';
myImg.width = 700;
*/

//  console.log(myImg.naturalWidth);

// myImg.addEventListener('load', () => console.log(myImg.naturalWidth));

// console.log(myImg.getAttribute('alt'));

// myImg.setAttribute('alt', 'new Image');

/*  
const pTag = document.createElement('p');
pTag.textContent = 'My New P Tag';
pTag.classList.add('pTag');

const myImg = document.createElement('img');
myImg.src = 'https://picsum.photos/300';
myImg.alt = 'new picture';

const myDiv = document.createElement('div');
myDiv.classList.add('wrap');

myDiv.appendChild(pTag);
myDiv.appendChild(myImg);
document.body.appendChild(myDiv);

const newHeader = document.createElement('h2');
newHeader.textContent = 'H2 New Header!';

myDiv.insertAdjacentElement('afterbegin', newHeader);


console.log(myDiv);
console.log(myImg);
console.log(pTag);
*/

/*
const list = document.querySelector('.pizza-menu-items');

const sourse = `https://picsum.photos/600`;
const discription = 'Cool Pic';

const myHTML = `
<div class="wrap">
    <h3>${discription}</h3>
    <img src="${sourse}" alt="${discription}" />
</div>
`;

list.innerHTML = myHTML;

console.log(list.innerHTML);
*/