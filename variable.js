const RollNo = 5495;
let Email = "example@gmail.com";
var pin_no = "4568";
name = "Naflan"; // name is not declared with any keyword.

console.log(RollNo);
console.log(Email);
console.log(pin_no);
console.log(name);

// RollNo = 1234; // Error: Assignment to constant variable.
console.log(RollNo); // RollNo cannot be reassigned.

Email = "newexample@gmail.com";
console.log("New Email: " + Email); // let can be reassigned.

pin_no = "1234"; // var can be reassigned.
console.log("New Pin: " + pin_no);

name = "Naflan Mohamed";
console.log("Updated Name: " + name); // name can be reassigned.
