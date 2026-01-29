// OPERATORS

// ARITHMETIC OPERATORS (The Math)


let a = 10;
let b = 5;

console.log(`Addition(+):  ${a + b}`);
console.log(`Subtraction(-):  ${a-b}`);
console.log(`Multiplication(*):  ${a * b}`);
console.log(`Devision(/):  ${a / b}`);
console.log(`Exponentiation(**):  ${b ** a}`);
console.log(`Modulus(%):  ${a % b}`);

//INCREMENT & DECREMENT (The Loop Tools)

//INCREMENT 

let score = 100;

score++; // post increment 
console.log(` post increment (x++)  ${score}`);

++score
console.log(` pre increment (++x)  ${score}`);

//DECREMENT

score--; // post decrement 
console.log(` post decrement (x--)  ${score}`);


--score; // pre decrement 
console.log(` pre decrement (--x)  ${score}`);

  

// ASSIGNMENT OPERATORS (The Shortcuts)


let x = 20;
x += 5;    // Addition assignment
console.log(`now x is: ${x}`); 

x -= 5; // Subtraction assignment
console.log(`now x is: ${x}`);

// COMPARISON OPERATORS (True / False)

let age = 20;

console.log(age > 20); 
console.log(age > 18); 
console.log(age < 16);
console.log(age >= 21);
console.log(age <= 19);

let val1 = 10;
let val2 = "10";

console.log(val1 == val2);  
console.log(val1 === val2); 
console.log(val1 != val2);
console.log(val1 !== val2);