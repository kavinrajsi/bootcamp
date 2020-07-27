console.log('Print odd numbers in an array ');

console.log(`Anonymous Function`);

var anonymousArrFunc = function (arr) {
  return arr.filter(n => n % 2 == 0);
}

console.log(anonymousArrFunc([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log(`IIFE`);

var iffeArrFunc = (function () {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return arr.filter(n => n % 2 == 0);
}());

console.log(iffeArrFunc);

console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);

console.log('Convert all the strings to title caps in a string array');


console.log(`Anonymous Function`);

var anonymousStrFunc = function (str) {
  return str.map(wo => wo.charAt(0).toUpperCase() + wo.slice(1));
}

console.log(anonymousStrFunc(['hello', 'world', 'this', 'is', 'anonymous']));

console.log(`IIFE`);

let stringArray = ['hello', 'world', 'this', 'is', 'anonymous'];

var iffeStrFunc = (function (str) {
  return str.map(wo => wo.charAt(0).toUpperCase() + wo.slice(1));
})(stringArray);


console.log(iffeStrFunc);

console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);

console.log('Sum of all numbers in an array');


console.log(`Anonymous Function`);

var anonymousNumSumFunc = function (numArr) {
  return numArr.reduce((num1, num2) => num1 + num2);
}

console.log(anonymousNumSumFunc([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log(`IIFE`);

let numSumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var iffeNumSumFunc = (function (numArr) {
  return numArr.reduce((num1, num2) => num1 + num2);
})(numSumArray);


console.log(iffeNumSumFunc);

console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);


console.log('Return all the prime numbers in an array');


console.log(`Anonymous Function`);

var anonymousPrimeFunc = function (numArr) {
  return numArr.filter(num => {
    if (num <= 1) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
}

console.log(anonymousPrimeFunc([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log(`IIFE`);

let numPrimeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var iffePrimeFunc = (function (numArr) {
  return numArr.filter(num => {
    if (num <= 1) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
})(numPrimeArray);


console.log(iffePrimeFunc);

console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);


console.log('Return all the palindromes in an array');


console.log(`Anonymous Function`);

var anonymousPalindromeFunc = function (pal) {
  return pal.filter(palin => typeof palin == 'string' ? palin.toLowerCase().split('').reverse().join('') == palin.toLowerCase() : palin.toString().toLowerCase().split('').reverse().join('') == palin.toString().toLowerCase());
}

console.log(anonymousPalindromeFunc(['Madam', 'hello', 'Anna', 12321]));

console.log(`IIFE`);

let numPalindromeArray = ['Madam', 'hello', 'Anna', 12321];

var iffePalindromeFunc = (function (pal) {
  return pal.filter(palin => typeof palin == 'string' ? palin.toLowerCase().split('').reverse().join('') == palin.toLowerCase() : palin.toString().toLowerCase().split('').reverse().join('') == palin.toString().toLowerCase());
})(numPalindromeArray);


console.log(iffePalindromeFunc);

console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);


console.log('Return median of two sorted arrays of same size');

console.log(`Anonymous Function`);

var anonymousMedianFunc = function (arr1, arr2) {

    let arrLen = arr1.length;

    if (arrLen % 2 == 0) {

        let indexOfMedian = (arrLen / 2) - 1;

        let arr1Median = ((arr1[indexOfMedian] + arr1[indexOfMedian + 1]) / 2);

        let arr2Median = ((arr2[indexOfMedian] + arr2[indexOfMedian + 1]) / 2);

        return ((arr1Median + arr2Median) / 2);

    } else {

        let indexOfMedian = ((arrLen + 1) / 2) - 1;

        return ((arr1[indexOfMedian] + arr2[indexOfMedian]) / 2);

    }
};

console.log(anonymousMedianFunc([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log(`IIFE`);

var iffeMedianFunc = (function () {

  let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let arrLen = arr1.length;

  if (arrLen % 2 == 0) {

    let indexOfMedian = (arrLen / 2) - 1;

    let arr1Median = ((arr1[indexOfMedian] + arr1[indexOfMedian + 1]) / 2);

    let arr2Median = ((arr2[indexOfMedian] + arr2[indexOfMedian + 1]) / 2);

    return ((arr1Median + arr2Median) / 2);

  } else {

    let indexOfMedian = ((arrLen + 1) / 2) - 1;

    return ((arr1[indexOfMedian] + arr2[indexOfMedian]) / 2);

  }

}());

console.log(iffeMedianFunc);

console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);

console.log('Remove duplicates from an array');

console.log(`Anonymous Function`);

var anonymousDuplArrFunc = function (arr) {
  return [...new Set(arr)];
}

console.log(anonymousDuplArrFunc([1, 2, 3, 3, 4, 4, 5, 6, 7, 1, 8, 9, 5]));

console.log(`IIFE`);

var iffeDuplArrFunc = (function () {
  let arr = [1, 2, 3, 3, 4, 4, 5, 6, 7, 1, 8, 9, 5];
  return [...new Set(arr)];
}());

console.log(iffeDuplArrFunc);

console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);


console.log('Rotate an array by k times and return the rotated array');

console.log(`Anonymous Function`);

var anonymousRotateArrFunc = function (arr,k) {
   if (!arr.length) return arr;
  let index = -1;
  while (++index < k) {
      arr.unshift(arr.pop());
  }
  return arr;
}

console.log(anonymousRotateArrFunc([1, 2, 3, 4, 5, 6, 7, 8, 9],3));

console.log(`IIFE`);

var iffeRotateArrFunc = (function () {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let k = 3;
  if (!arr.length) return arr;
  let index = -1;
  while (++index < k) {
      arr.unshift(arr.pop());
  }
  return arr;
}());

console.log(iffeRotateArrFunc);

console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);

let ee = {
  "Actors": [    {
      "name": "Tom Cruise",
      "age": 56,
      "Born At": "Syracuse, NY",
      "Birthdate": "July 3, 1962",
      "photo": "https://jsonformatter.org/img/tom-cruise.jpg",
      "wife": null,
      "weight": 67.5,
      "hasChildren": true,
      "hasGreyHair": false,
      "children": [
        "Suri",
        "Isabella Jane",
        "Connor"
      ]    },
    {
      "name": "Robert Downey Jr.",
      "age": 53,
      "Born At": "New York City, NY",
      "Birthdate": "April 4, 1965",
      "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg",
      "wife": "Susan Downey",
      "weight": 77.1,
      "hasChildren": true,
      "hasGreyHair": false,
      "children": [
        "Indio Falconer",
        "Avri Roel",
        "Exton Elias"
      ]    }  ]
}


console.log(`Do the merging of children array ( the task u did in class) using Anonymous, arrow and array methods like MRF or foreach`)

let childrensArray = ee.Actors.map(el=>el.children);

let concatentateArray = (childrenArray) => {
    return childrenArray[0].concat(childrenArray[1]);
};

console.log(`Merged Children Array`,concatentateArray(childrensArray));

console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);


console.log(`Get the countries in asia`);

// Create a request variable and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = async function() {
  // Begin accessing JSON data here
let data = JSON.parse(this.response)
// console.log(data);

let asianCountriedData = data.filter(el=>{
   return el.region ==='Asia';
})
// console.log('asian',asianCountriedData);
console.log(`Region Asia~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
asianCountriedData.forEach(el=>{
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  console.log(`${el.name} is an Asian Country`);

})
console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);

console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);

console.log(`Get the countries with population less than 2L`);

let countriedDataLessThan2L = data.filter(el=>{
  return el.population < 2000000;
})

countriedDataLessThan2L.forEach(el=>{
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  console.log(`${el.name} is having population lesser than 2L`);

})

console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);

console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);

console.log(`Bumpup the current population of all the countries by 1L`);
let bumpupCountriesPopulation = data.map(el=>el.population+=100000);
bumpupCountriesPopulation.forEach(el=>{
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  console.log(`${el.name} has bumped population to ${el.population}`);
});

console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);

console.log(`convert all the names in capital`);
data.forEach(el=>{
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  console.log(`${el.name} in caps is ${el.name.toUpperCase()}`);
})
console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);

console.log(`print following details  name , capital , flag `);
data.forEach(el=>{
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  console.log(`${el.name} has its capital as ${el.capital}`);
  console.log(`flag is ${el.flag}`);
})
console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);

console.log(`Print the total population of the countries `);

let totalPopulation = data.map(el=>el.population).reduce((total,population)=>{
  return total + population;
})

console.log(`Total Population of all the countries is ${totalPopulation}`);

console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);

console.log(`Print the total population of the countries in asia`);

let totalPopulationOfAsia = asianCountriedData.map(el=>el.population).reduce((total,population)=>{
  return total + population;
})


console.log(`Total Population of the Asian countries is ${totalPopulationOfAsia}`);

}

console.log(`++++~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~++++`);