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
