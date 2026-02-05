// 🔹 Tasks on if statement (5)

// Take a number as input.
// Check if the number is positive and print a message.
// let num = 8;
// if (num > 0){
//     console.log("num is positive")
// };

// ============================================================================
// Take a user’s age.
// Check if the age is 18 or above, then print “Eligible to vote”.

//  let age = 17;
//  if (age >= 18) {
//     console.log("Eligible to vote")
//  };

//  =====================================================================================
// Take a number.
// Check if the number is even.

//  let num = 7654321 ;
//  if ( num % 2 == 0){
//     console.log("Number is even");
//  };

// ======================================================================================
// Take a temperature value.
// Check if temperature is greater than 30, print “It’s hot”.

// let temp = 30;
// if (temp >=30){
//     console.log("It's hot")
// };
// Take a string.
// Check if the string length is greater than 5.

// let age = 23;
//  if (age.length > 5){
//     // console.log("age");   -----------------------------------------------------------
//  }else { console.log("error");
// }

// 🔹 Tasks on if–else (5)

// Take a number.
// Print “Even” or “Odd” using if–else.

//  let num = 321 ;
//  if ( num % 2 == 0){
//     console.log("Number is even");
//  } else{
//     console.log("Number is odd");
//  };

// ==========================================================================================

// Take marks of a student.
// If marks ≥ 40 → “Pass”, else → “Fail”.

//  let marks = 55;
//  if (marks >= 40){
//     console.log("Pass")
//  }else {
//     console.log("Fail");
//  };
// ==========================================================================================
// Take a number.
// If number is positive → print “Positive”, else → “Negative”.
// let num = 7;
// if (num > 0) {
//   console.log("num is positive");
// } else {
//   console.log("num is negtive");
// }

// Take age.
// If age ≥ 18 → “Adult”, else → “Minor”.
// let age = 23;
// if (age >= 18) {
//     console.log("ADULT")
// }else{
//     console.log("Minor")
// }
// =================================================================================
// Take two numbers.
// If first number is greater → print it, else print the second.
//  let num1 = 60;
//  let num2 = 40;
//  if( num1 > num2 ){
//     console.log(num1);
//  }else {
// console.log(num2);
//  }
// ==================================================================================
// 🔹 Tasks on else–if ladder (5)

// Take marks and print grade:
// 90+ → A
// 75–89 → B
// 50–74 → C
// Below 50 → Fail

// let marks = prompt("enter a number")

// // let marks = 90;
//  if (marks <= 100 && marks < 0){
//     console.log("Enter valid number");
// } else if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks <= 89 && marks >= 75) {
//   console.log("Grade B");
// } else if (marks <= 74 && marks >= 50) {
//   console.log("Grade C");
// } else if (marks <= 49) {
//   console.log("Fail");
// }
// ===================================================================================
// Take a number and check:
// Positive
// Negative
// Zero
// let num = 1;
// if (num > 0) {
//     console.log("Positve");
// } else if ( num < 0){
//     console.log( "Negtive");
// }else {
//     console.log("Zero");
// }
// ===================================================================================
// Take temperature:
// < 10 → Cold
// 10–25 → Normal
// 25 → Hot
// let temp = 5;
// if (temp >= 25) {
//   console.log("Hot");
// } else if (temp < 25 && 10 <= temp) {
//   console.log("Normal");
// } else if (temp < 10) {
//   console.log("Cold");
// }
// ===================================================================================
// Take age and classify:
// < 13 → Child
// 13–19 → Teen
// 20–59 → Adult
// 60+ → Senior

// let age = 65;

// if (age < 13) {
//   console.log("Child");
// } else if (age <= 19) {
//   console.log("Teen");
// } else if (age <= 59) {
//   console.log("Adult");
// } else {
//   console.log("Senior");
// }
// ====================================================================================

// 🔹 Tasks on switch statement (5)

// Take a number (1–7).
// Print the day of the week.
// let day = 2;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// Take a number (1–12).
// Print the month name.
// let month = 12;

// switch (month) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("Febrary");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("Ocutber");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
//   default:
//     console.log("Invalid month");
// }
// =========================================================================================

// Create a simple calculator:

// + → Addition
// - → Subtraction
// * → Multiplication
// / → Division

// let a = 10;
// let b = 20;
// let Operator = "-";

// switch (Operator) {
//   case "+":
//     console.log(`Addition = ${a + b}`);
//     break;
//   case "-":
//     console.log(`Subtraction = ${a - b}`);
//     break;
//   case "*":
//     console.log(`Multiplication = ${a * b}`);
//     break;
//   case "/":
//     console.log(`Devision = ${a / b}`);
//     break;
//   default:
//     console.log("Enter valid Operator");
// }
// ===================================================================================
// Take a traffic light color (red, yellow, green).
// Print the action to take.
// let light = "green";

// switch (light){
//     case "red" : console.log("Stop");
//     break;
//     case "yellow" : console.log("Ready");
//     break;
//     case "green" : console.log("Go");
//     break;
//     default:    
//     console.log("Enter valid data");    
// }
// ===================================================================================
// 🔹 Tasks on var, let, const (5)

// Declare one variable using var, let, and const.
// Try reassigning all three and observe the result.
// var x = 10;
// let y = 20;
// const z = 30;

// x = 15;
// y = 25;
// z = 35 //Error (const cannot be reassigned)   let-var-const-if-task.js:293 Uncaught TypeError: Assignment to constant variable.

// =======================================================================================
// Write a program where:

// const stores PI value
// let stores radius
// Calculate area of a circle.

// const PI = 3.14;
// let radius = 5;
// let area = PI * radius * radius;
// console.log(area);

// =========================================================================================