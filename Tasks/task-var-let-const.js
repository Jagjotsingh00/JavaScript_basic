/****************************************************
 * ASSIGNMENT: var vs let vs const
 *
 * Instructions:
 * - Do NOT delete questions
 * - Write code below each task
 * - Comment expected output or error
 * - Try to predict before running
 ****************************************************/

/* ===============================
   TASK 1: Re-declaration
================================ */
// Declare a variable using var and redeclare it
// Declare a variable using let and try redeclaring it
// Declare a variable using const and try redeclaring it
// Observe the behavior

// Write your code below :point_down:

// var a = 10;
// var a = 20;     // we can redeclare in var
// console.log(a);

// let b = 10;
// let b = 20; //we cannot  redeclare in let
//  console.log(b)

// const c = 10;
// const c = 20; //we cannot  redeclare in const.  Cannot redeclare block-scoped variable c
//  console.log(c)

/* ===============================
   TASK 2: Re-assignment
================================ */
// Declare one variable with var and reassign it
// Declare one variable with let and reassign it
// Declare one variable with const and try reassigning it
// Comment which one gives error and why

// Write your code below :point_down:

// var a = 10;
// a = 20;
// console.log(a); //we can reassign in var

// let b = 10;
// b = 20; //we can reassign in let
// console.log(b);

// const c = 10;
// c = 20;
// console.log(c); // TypeError: Assignment to constant variable.    //we cannot reassign in const

/* ===============================
   TASK 3: Block Scope Test
================================ */
// Create an if block
// Inside it declare:
// - one var
// - one let
// - one const
// Try accessing all three outside the block
// Comment which works and which fails

// Write your code below :point_down:

//   if (true) {
//   var  x = 20 ;
//     console.log(x); 
//   }
//   console.log(x); // var have global scope
  


//   if (true) {
//   let  y = 30 ;
//     console.log(y); // block scope
//   }
//   console.log(y); // let does not have global scope     // ReferenceError: y is not defined
  
  
//   if (true) {
//   const  z = 40 ;
//     console.log(z); // block scope
//   }
//   console.log(z); // const does not have global scope   // ReferenceError: z is not defined


/* ===============================
   TASK 4: Guess the Output
================================ */
// Predict output BEFORE running

// if (true) {
//   var a = 10;
//   let b = 20;
// }

// console.log(a);
// console.log(b);  // What happens?

// Write explanation in comment :point_down:

    // console.log(a);  // In this case var has (a) global variable.
    // console.log(b);  // Uncaught ReferenceError: (b) is not defined let has a global scope it does not have global scope.


/* ===============================
   TASK 5: Fix the Code
================================ */
// Fix the code without changing logic

// const score = 10;
// score = score + 5;
// console.log(score);


// Write corrected code below :point_down:


// let score = 10;
// score = score + 5;
// console.log(score);  

// ------------------OR----------------------

//  let score = 10;
// score = score + 5;
// console.log(score); // we can use let or var instead of const because here we change the value of score but in const we can not change the value.

/* ===============================
   TASK 6: Choose the Right Keyword
================================ */
// Decide whether to use var, let, or const
// Explain choice in comment

// 1. User country (never changes)
// 2. User score (changes during game)
// 3. Loop counter
// 4. App config object

// Write your answers below :point_down:
// const country = "India";
// console.log(country);

// let score = 20;
// score = 40
// console.log(score);



// Predict output and explain

// var x = 5;

// if (true) {
//   var x = 10;
// }

// console.log(x);

// Why did this happen?

// Write explanation below :point_down:


// var x = 5;

// if (true) {
//   var x = 10;
// }

// console.log(x);

// here value of x is 10 .
// this is because var is golbal scope .


/****************************************************
 * END OF ASSIGNMENT
 ****************************************************/
