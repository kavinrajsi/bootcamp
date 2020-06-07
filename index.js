/* // Copy the content into a variable
let cat = [
  {
    name: 'Lindy',
    breed: 'Cymric',
    color: 'white',
    kittens: [
      {
        name: 'Percy',
        gender: 'm',
      },
      {
        name: 'Thea',
        gender: 'f',
      },
      {
        name: 'Annis',
        gender: 'f',
      },
    ],
  },
  {
    name: 'Mina',
    breed: 'Aphrodite Giant',
    color: 'ginger',
    kittens: [
      {
        name: 'Doris',
        gender: 'f',
      },
      {
        name: 'Pickle',
        gender: 'f',
      },
      {
        name: 'Max',
        gender: 'm',
      },
    ],
  },
  {
    name: 'Antonia',
    breed: 'Ocicat',
    color: 'leopard spotted',
    kittens: [
      {
        name: 'Bridget',
        gender: 'f',
      },
      {
        name: 'Randolph',
        gender: 'm',
      },
    ],
  },
];

// Add a new cat
function addnewCat() {
  cat.push({
    name: 'Douglas',
    breed: 'Japanese Bobtail',
    color: 'Harlequin',
    kittens: [
      {
        name: 'Bridget',
        gender: 'f',
      },
      {
        name: 'Randolph',
        gender: 'm',
      }],
  });
  console.log(cat);
  return true;
}
addnewCat(cat);

// // Print all the cat breads
let cats = JSON.parse(JSON.stringify(cat));
console.log(cats);

// // What's the gender of Percy
function genderPercy() {
  console.log(cats[0].kittens[0].gender);
  return true;
}
genderPercy(cats);

// // The names of the three mother cats, separated by commas, in the motherInfo variable.

// // The total number of kittens, and how many are male and female, in the kittenInfo variable.
function displayInfo() {
  let total = 0,
    male = 0,
    female = 0;
  for (i = 0; i < cats.length; i++) {
    for (j = 0; j < cats[i].kittens.length; j++) {
      total++;
      if (cats[i].kittens[j].gender == 'm') {
        male++;
      } else if (cats[i].kittens[j].gender == 'f') {
        female++;
      }
    }
  }
  console.log(
    'Total number of kittens: ' +
      total +
      ', with total number of male is ' +
      male +
      ' and female is ' +
      female
  );

  return true;
}
displayInfo(cats); */
/*
// demo car
const library = [
  {
    title: 'Javascript',
    price: 500,
    readers: [
      {
        name: 'Person 1',
        count: 300,
      },
      {
        name: 'Person 2',
        count: 400,
      },
    ],
    authorDetails: {
      name: 'Raj',
      age: 40,
    },
  },
  {
    title: 'Nodejs',
    price: 600,
    readers: [],
    authorDetails: {
      name: 'Raj',
      age: 80,
    },
  },
];

// Insert a new key called email and assign a value email1@gmail.com and email2@gmail.com respectively in both authorDetails object;
for (i = 0; i < library.length; i++){
   library[i].authorDetails['email'] = 'email'+ (i +1) +'@gmail.com';
   console.log(library[i].authorDetails);
}

Update the count of Person 2 inside readers Array in Javascript;


Insert a new reader in the readers array for Nodejs.
console.log(
  library[1].readers.push(
    { name: 'kavin22', count: 52200 },
    { name: 'kavin85', count: 500 }
  )
);

Create a New Object in the library for a new Book called SQL.
console.log(library.push({ title: 'SQL' }));
Find the datatype of author age in Nodejs Object.
console.log(typeof library[1].authorDetails.age);
 */

// Randeom
// console.log(Math.floor(Math.random() * 10 + 1));

// // Write a function that will get two parameters and return a sum of it.
// let numOne = window.prompt("Enter number one: "),
//   numTwo = window.prompt("Enter number two: "),
//   added = 0;

// function sumofNumber(numOne, numTwo) {
//   /* convert input to integer  */
//   added = parseInt(numOne) + parseInt(numTwo);
//   console.log("sum of two number are: " + added);
//   return true;
// }
// sumofNumber(numOne, numTwo);

// let value = 0,
//   numOne = prompt('Enter number one: '),
//   numTwo = prompt('Enter number two: ');

// // if (typeof numOne != parseInt) {
// //   let numOne = prompt('Please Enter number one: ');
// // }

// // if (typeof numTwo != parseInt) {
// //   let numTwo = prompt('Please Enter number two: ');
// // }

// let actionBlock = parseInt(
//   prompt('Type\n 1: add\n 2: subtract\n 3: multiply\n 4: divid')
// );

// function add() {
//   value = numOne + numTwo;
//   console.log(value);
//   return true;
// }
// function subtract() {
//   value = numOne - numTwo;
//   console.log(value);
//   return true;
// }
// function multiply() {
//   value = numOne * numTwo;
//   console.log(value);
//   return true;
// }
// function divid() {
//   value = numOne / numTwo;
//   console.log(value);
//   return true;
// }

// switch (actionBlock) {
//   case 1:
//     add(numOne, numTwo);
//     break;
//   case 2:
//     subtract(numOne, numTwo);
//     break;
//   case 3:
//     multiply(numOne, numTwo);
//     break;
//   case 4:
//     divid(numOne, numTwo);
//     break;
//   default:
//     console.log('Sorry, we are in to bug.');
//     alert('Please re-enter the number from the range of 1 to 5');
//     let actionBlock = parseInt(
//       prompt('Type\n 1: add\n 2: subtract\n 3: multiply\n 4: divid')
//     );
// }

// // Write a function that will get two parameters and return a sum of it.
// // let numOne = window.prompt('Enter number one: '),
// //   added = 0,
// //   randomNumber = 0;

// // function randomGenerator() {
// //   randomNumber = Math.floor(Math.random() * 10 + 0);
// //   return randomNumber;
// // }

// // function sumofNumber(numOne, randomNumber) {
// //   /* convert input to integer  */
// //   added = parseInt(numOne) + parseInt(randomNumber);
// //   console.log('sum of two number are: ' + added);
// //   return true;
// // }
// // sumofNumber(numOne, randomGenerator());

// let a, b, c, d;
// console.log(`Log four variables without assigning values are: ${a}, ${b}, ${c}, ${d}`);

// // // let a, b, c, d;
// // console.log(
// //   `Log four variables without assigning values are: ${a}, ${b}, ${c}, ${d}`
// // );

// /* How to get value of the variable myvar as output
//  */

// /* Declare variables to store your first name, last name, marital status, country and age in multiple lines  */
// let firstname = 'John',
//   lastname = 'Doe',
//   maritalstatus = 'not prefer to say',
//   country = 'India',
//   age = '3 years';
// console.log(
//   `${firstname} ${lastname} with marital status of ${maritalstatus} living in ${country} with age of ${age}`
// );

// // Declare variables and assign string, boolean, undefined and null data types
// let name = 'John',
//   maritalStatus = 'false',
//   book,
//   cards = null;
// console.log(
//   `name: ${typeof name},\n marital status: ${typeof maritalStatus},\n book: ${typeof book},\n cards: ${typeof cards}`
// );

// // convert string to integer and Number()
// // let number = '5.00';
// console.log(`Convert ${number} as ${typeof (number)} to ${typeof (parseInt(number))} as ${(parseInt(number))} and as ${(Number(number))} `);
// // Plus sign(+);
// let num1 = '6',
//   num2 = '4';
// console.log(`Total number is : ${(parseInt(num1)) + (parseInt(num2)) }`);

// let number = 2;
// console.log(`Formula axa = a^2, So square of ${number} is ${number * number}`);

// let num1 = 2, num2 = 3, num3 = 6;
// console.log(`Addition of 3 numbers is ${num1 + num2 + num3}`);

// let cel = 37;
// console.log( (( 1.8 * cel )+ 32).toFixed(2));

// let meter = 5000;
// console.log(`Where ${meter} meter is ${meter * 0.000621} miles`);

// let pound = 2;
// console.log(` where ${pound} pound is equal to ${pound / 2.204623} kg`);

// let runScored = 522, timeOut = 27;
// console.log(`Batting Average is ${(runScored / timeOut).toFixed(2)}`);

// let tamil = 80, english = 74, maths = 70, science = 64, social = 64;
// totalScore = tamil + english + maths + science + social;
// console.log(`avg. score is ${totalScore / 5}`);

// let x = 50, y = 20;
// console.log(`Power of ${x} and ${y} number is ${x ^ y}`);

// let p = 100, n = 2, r = 10;
// console.log(`Calculated Simple Interest : ${p * n * (r) / 100}`);

// let side1 = 5, side2 = 6, side3 = 7, sides, area;
// sides =  (side1 + side2 + side3)/2;
// area = Math.sqrt(sides * ((sides - side1) * (sides - side2) * (sides - side3)));
// console.log(area);

// let radius = 5;
// console.log(((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(2));

// let length = 5, width = 5, height = 10, amountVolume;
// amountVolume =( (parseFloat(length) * parseFloat(width) * parseFloat(height) ) .toFixed(2));
// console.log(amountVolume);

// let side1 = 5, side2 = 6, side3 = 7, perimeter, area;
// perimeter = (side1 + side2 + side3) / 2;
// area = Math.sqrt( perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)) );
// console.log(area.toFixed(2));

// Discount % = Discount / Marked Price × 100 %
// let discountPrice = 800, marketPrice = 1000;
// console.log((discountPrice / marketPrice) * 100));

// let radius = 5, diameter, circumference, area;
// diameter = 2 * radius;
// circumference = 2 * (3.14) * radius;
// area = (3.14) * radius * radius;
// console.log(`Radius of Circle is ${radius} \nDiameter Of a Circle is ${diameter.toFixed(2)} \nCircumference Of a Circle is ${circumference.toFixed(2)}  \nArea Of a Circle is ${area.toFixed(2)}`);

// let num1 = 10, num2 = 15;
// sum = num1 + num2;
// sub = num1 - num2;
// mult = num1 * num2;
// div = (num1 / num2).toFixed(2);
// mod = (num1 % num2).toFixed(2);
// console.log(`Number 1 : ${num1} and Number 2 : ${num2} \n Addition : ${sum} \n Subtraction : ${sub} \n Multiplication : ${mult} \n Division : ${div} \n Modulus : ${mod}`);

// let base = 6, height = 10;
// area = (1 / 2) * (base * height);
// console.log(`Area of Circle is ${area} for base ${base} and height ${height}`);

//  a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10

// let unitPrice = 10,
//   consumeWatts = 100,
//   days = 30,
//   hour = 24;
// energyBill = consumeWatts * hour * days * unitPrice;

// console.log(
// `Energy Price : ${unitPrice}
// Consumed Watts : ${consumeWatts}
// Usage Time : ${hour}
// Electricity Bill : ${energyBill}`
// );

let sum = 0,totalCr=0,  xvlau =[],
  sub1 = 'c',
  sub2 = 'd',
  sub3 = 'e',
  sub4 = 'c',
  sub5 = 'd',
  sub6 = 'c',
  lab1 = 's',
  lab2 = 'a',
  crsub1 = 4,
  crsub2 = 4,
  crsub3 = 3,
  crsub4 = 3,
  crsub5 = 4,
  crsub6 = 5,
  crlab1 = 2,
  crlab2 = 2,
  letter = [sub1, sub2, sub3, sub4, sub5, sub6, lab1, lab2],
    crtotal = [crsub1, crsub2, crsub3, crsub4, crsub5, crsub6, crlab1, crlab2];

for (let i = 0; i < crtotal.length; i++) {
    totalCr += crtotal[i];
}
console.log(totalCr + "\n");

for (let i = 0; i < letter.length; i++) {
    switch (letter[i]) {
        case 's':
            sum = 10;
            break;
        case 'a':
            sum = 9;
            break;
        case 'b':
            sum = 8;
            break;
        case 'c':
            sum = 7;
            break;
        case 'd':
            sum = 6;
            break;
        case 'e':
            sum = 5;
            break;
        case 'u':
            sum = 0;
            break;
    }
    (xvlau.push(sum));
    // console.log(sum);
} console.log(xvlau);
