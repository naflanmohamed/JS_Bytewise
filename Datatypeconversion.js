// ------ string to number conversion ------
let marks = "86";

console.log(typeof marks); // string

let valueinNumber = Number(marks);
console.log(typeof valueinNumber); // number
console.log(valueinNumber); // 86

// ------ string to number conversion ------
let character = "A";

console.log(typeof character); // string

let valueinNumber1 = Number(character);
console.log(typeof valueinNumber1); // number
console.log(valueinNumber1); // NaN

// ------ number to string conversion ------
let mark = 86;

console.log(typeof mark); // number

let valueinString = String(mark);
console.log(typeof valueinString); // string
console.log(valueinString); // 86

// ------ number to boolean conversion ------
let marks1 = 1;

console.log(typeof marks1); // number

let valueinString1 = Boolean(marks1);

console.log(typeof valueinString1); // boolean
console.log(valueinString1); // true

// ------ number to boolean conversion ------
let marks2 = 0;

console.log(typeof marks2); // number

console.log(Boolean(marks2)); // false

console.log(typeof marks2); // boolean
console.log(marks2); // 0

// ------ boolean to number conversion ------
let isTrue = true;

console.log(typeof isTrue); // boolean

let valueinNumber2 = Number(isTrue);
console.log(typeof valueinNumber2); // number
console.log(valueinNumber2); // 1
