// OPERATORS

// ARITHMETIC OPERATORS (The Math)


// let a = 10;
// let b = 5;

// console.log(`Addition(+):  ${a + b}`);
// console.log(`Subtraction(-):  ${a-b}`);
// console.log(`Multiplication(*):  ${a * b}`);
// console.log(`Devision(/):  ${a / b}`);
// console.log(`Exponentiation(**):  ${b ** a}`);
// console.log(`Modulus(%):  ${a % b}`);


// -----------------------------------------------------------------------------------------------------------------------------


// //INCREMENT & DECREMENT (The Loop Tools)

// //INCREMENT 

// let score = 100;

// score++; // post increment 
// console.log(` post increment (x++)  ${score}`);

// ++score
// console.log(` pre increment (++x)  ${score}`);

// //DECREMENT

// score--; // post decrement 
// console.log(` post decrement (x--)  ${score}`);


// --score; // pre decrement 
// console.log(` pre decrement (--x)  ${score}`);

//   ----------------------------------------------------------------------------------------------------------------------



// // ASSIGNMENT OPERATORS (The Shortcuts)


// let x = 20;
// x += 5;    // Addition assignment
// console.log(`now x is: ${x}`); 

// x -= 5; // Subtraction assignment
// console.log(`now x is: ${x}`);

// // COMPARISON OPERATORS (True / False)

// let age = 20;

// console.log(age > 20); 
// console.log(age > 18); 
// console.log(age < 16);
// console.log(age >= 21);
// console.log(age <= 19);
 
// -------------------------------------------------------------------------------------------------------------------------------------
// let val1 = 10;
// let val2 = "10";

// console.log(val1 == val2);  // CHECK ONLY VALUE
// console.log(val1 === val2); // CHECK VALUE AND TYPE
// console.log(val1 != val2);  // NOT EQUAL
// console.log(val1 !== val2); // NOT EQUAL AND TYPE 
 
// -------------------------------------------------------------------------------------------------------------------------------------



// CONCATENATION------------------------------------------------------------------------------------------------------------------------

let a = 10;
let b = 20;
console.log(`addition: ${a + b}`);


let fName = "Jagjot"
let lName = " singh"
console.log(fName + lName); // String + String (Concatenation)

let score = 20;
console.log(`(Number + String) : ${score + " Points"} `);




// Left to Right Execution---------------------------------------------------------------------------------------------------------------


console.log(`(Left to Right Execution): ${ 5 + 5 + "10"}`); // only addition is consider as a string.  // 1010
console.log(`(Left to Right Execution): ${ 5 + 5 - "10"}`); //0
console.log(`(String First = All String): ${"5" + 5 + 5}`); //String First = All String
console.log(`(String First = All String): ${"5" - 5 + 5}`); // 5 (5-5=0,0+5=5)


// Parentheses Control Math

console.log(` total : ${1 + (5 + 5)}`); //Parentheses



// Operator Behavior (Interview)----------------------------------------------------------------------------------------------------------



// In this case, only addition with a string is considered a string; all other operations are considered numbers.
console.log("5" + 5);
console.log(5 + "5");
console.log(10 + "5");
console.log( 10 - "5");
console.log( "5" - 10);
console.log( "5" / 5);
console.log("5" * 5);
console.log("25" % 2);
