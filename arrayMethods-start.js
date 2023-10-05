const fruits = ['apple', 'orange', 'banana', 'kiwi', 'lemon', 'apple', 'banana'];

const juice = ['mixed', 'orange', 'berries'];

const fish = {
  salmon: 12,
  seaBass: 8,
  tuna: 3
};

const cars = [
  {
    id: '22a',
    data: {
      brand: 'toyota',
      model: 'corolla', 
      produced: 'June 7, 2015'
    }
  },
  {
    id: '22a',
    data: {
      brand: 'BMW',
      model: 'X3', 
      produced: 'November 20, 2018'
    }
  },
  {
    id: 'qq3',
    data: {
      brand: 'tesla',
      model: 'model x',
      produced: 'January 1, 2022'
    } 
  },
  {
    id: '54i',
    data: {
      brand: 'hyundai',
      model: 'solaris',
      produced: 'October 5, 2020'
    }
  },
  {
    id: 'aa22',
    data: {
      brand: 'nissan',
      model: 'micra',
      produced: 'September 17, 2013'
    }
  },
];

const bills = [200, 430, 1000, 30, 705, 125, 1330, 510];

// Static Methods

const static1 = Array.of('Vika', 'Mika');

const static2 = Array.from({length: 5}, function(item, index) {
  return index;
});

const isTrue = Array.isArray(static1);

const staticKeys = Object.keys(fish);

const staticValues = Object.values(fish);

const staticEntries = Object.entries(fish);

/* Object.entries(fish).forEach(element => {
  const [key, value] =  element;
  console.log(key, value);
}); */

// Instance methods

//console.log(fruits.join(' '));

const fruitsString = 'яблоки, дыни, груши';

const fruitsArray = fruitsString.split(',');

// const lastFruit = fruits.pop();

// fruits.push('Avocado');

// const removeFirstFruit = fruits.shift(); 

// fruits.unshift('Avocado');

const fruitsCopy = fruits.slice(0);

/* fruits.forEach((eLement, index, fruitsArray) => {
  const nextFruit = fruitsArray[index + 1];
  const prevFruit = fruitsArray[index - 1];

  nextFruit ? console.log('next >> ', nextFruit) : null;
  
  prevFruit ? console.log('previous >> ', prevFruit) : null;

   index === fruitsArray.length - 1
   ? console.log('End')
   : console.log('Processing')
}); */

// map

// const juiceBottles = juice.map((value, i) => console.log(value, i));

const cars2 = cars.map(car => {

  // Преобразовать данные о дате производства
  const producedData = new Date(car.data.produced);
  const now = Date.now();
  const curDate = new Date(now);

  //console.log(producedData.getFullYear());
  //console.log(curDate.getFullYear());
  
  // Определить сколько машинам лет

  const age = curDate.getFullYear() - producedData.getFullYear();
  //console.log(year);
  // Убрать вложенность

  return {
    id: car.id,
    brand: car.data.brand,
    model: car.data.model,
    year: new Date(car.data.produced).getFullYear(),
    age
  }
});

//console.table(cars2);


// filter find

const carBefore = cars2.filter(car => car.year < 2021);

const myCar = cars2.find (car => car.id === '22a');

//console.table(myCar);

//console.table(carBefore);


// reduce

const allBills = bills.reduce((sum, curValue) => sum + curValue);

const fruitsCount = fruits.reduce((title, value) => {
  title[value] = title[value] + 1 || 1;
  return title;
}, {});