/// Funkcje

function triangleArea(base, height) {
  const area = (1 / 2) * base * height;
  return area;
}

const area = triangleArea(2, 4);
console.log(area);

// 1. Napisz funkcję o nazwie sum,
//która będzie przyjmować dwa argumenty i zwracać ich sumę.
//Wywołaj funkcję i sprawdź czy działa poprawnie.

function multiply(a, b) {
  const multiply = a * b;
  return multiply;
}

const multi = multiply(2, 5);
console.log(multi);

// 2. ** Napisz funkcję, która jako argument przyjmować będzie Twoje imię.
// Następnie w ciele funkcji wywołaj alert, który wyświetli tekst
// ‘Witaj, Andrzej’ (jeżeli masz na imię Andrzej :) ) https://developer.mozilla.org/pl/docs/Web/API/Window/alert

function name(yourName) {
  alert(`Witaj ${yourName}`);
  return name;
}

//3. Napisz funkcję, która jako argument przyjmować będzie wiek,
// natomiast powinna zwracać wiek przeliczony na dni.
// Przyjmijmy, że rok ma 365dni i nie zwracamy uwagi na lata przestępne.
// Postaraj zabezpieczyć ciało funkcji, aby przyjmowało jedynie parametry dodatnie.
// Jeżeli jednak ktoś wprowadzi liczbę nie spełniającą warunku, to powinien otrzymać alert wskazujący na to, co jest nie tak.

function ageInDays(age) {
  const ageInDays = age * 365;
  if (age < 0) {
    alert(`Ten: ${age} wiek jest mniejszy niz 0`);
  }
  return ageInDays;
}

const myAgeInDays = ageInDays(27.5);
console.log(myAgeInDays);

const kingasAgeInDays = ageInDays(24);
console.log(kingasAgeInDays);

const manAgeInDays = ageInDays(74);
console.log(manAgeInDays);

function daysLeftToDeath(age, gender) {
  let daysLeft;
  if (gender === "man") {
    daysLeft = 26280 - ageInDays(age);
  } else {
    daysLeft = 29930 - ageInDays(age);
  }
  return daysLeft;
}

const daysToDeathLukasz = daysLeftToDeath(27, "man");
console.log(daysToDeathLukasz);

const daysToDeathKinga = daysLeftToDeath(24, "woman");
console.log(daysToDeathKinga);

//Napisz funkcję, która będzie przyjmować dwa parametry będące liczbami całkowitymi. Powinna zwracać wartość true, jeżeli jeden z argumentów jest liczbą 12, lub suma obu argumentów wynosi 12.

function twelveTrue(num1, num2) {
  if (num1 === 12 || num2 === 12 || num1 + num2 === 12) {
    return "true";
  }
  return "false";
}

const isItTwelve = twelveTrue(6, 6);
console.log(isItTwelve);

/// MAP FUNCTION

// const names = [
//   "Lukasz",
//   "Marcin",
//   "Kinga",
//   "Ania",
//   "Kasia",
//   "Andrzej",
//   "Patryk",
//   "Martyna",
//   "Wiktoria",
// ];

// const namesMapped = [];

// function getGender(nam) {}
// const lastChar = nam[nam.lenght - 1];
// if lastChar === 'a' {
//     return "female";
// } else {
//     return "male";
// }

// for (i = 0; i < names.lenght ; i++) {
//     const nam = names[i]
//     const person = {
//         nam,
//         gender: getGender(nam);
//     }

//     namesMapped.push(person)
// }

// console.log(namesMapped)

// 1. Accessing and updating elements: You should be familiar with accessing elements in an array using their index, as well as updating them.

// 2. Adding and removing elements: You should be familiar with adding and removing elements from an array using methods such as push(), pop(), shift(), unshift(), splice(), etc.

//////////////////////////////////////////////////////
// 3. Iterating over arrays: You should be familiar with iterating over the elements of an array using for loops, forEach() method, map() method, reduce() method, etc.

//Array with mixed data types
let mixedArray = [1, "2", { key: "value" }];

console.log(mixedArray);

// convert mixedArray to numbers using .map

let numbers = mixedArray.map(function (element) {
  return Number(element);
});
console.log(numbers);

// convert mixedArray to strings using .map

let strings = mixedArray.map(function (element) {
  return String(element);
});
console.log(strings);

// convert mixedArray to objects using .map

let objects = mixedArray.map(function (element) {
  return Object(element);
});
console.log(objects);

//////////////////////////////////////////////
// 4. Filtering arrays: You should be familiar with filtering arrays to create a new array that contains only elements that meet certain criteria, using the filter() method.

let filteredNumbers = numbers.filter(function (numb) {
  return numb >= 1;
});
console.log(filteredNumbers);

// 5. Sorting arrays: You should be familiar with sorting arrays in ascending or descending order, using the sort() method.
// 6. Searching arrays: You should be familiar with searching for elements in an array using methods such as indexOf(), lastIndexOf(), includes(), etc.
// 7. Merging arrays: You should be familiar with merging two or more arrays into one array using methods such as concat() or the spread operator ....
