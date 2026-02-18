// Normal function

// function functionName() {
//   console.log("Hello,");
//   return "Jagjot singh";
// }
// console.log(functionName());

// arrow function
// () => {}


// const name = () => "Jagjot singh" ;
// console.log(name());



// const sum = (a, b) => a + b ;
// console.log(sum(2,5));


// ------------------------------------------------------------------
// ### 1. Greeting Function
// Create a function `greetUser(name)`
// - It should return: `Hello <name>`
// - Call the function with **3 different names**
// // console.log(functionTest());

// const greetUser = (name) => `hello, ${name}`

// console.log(greetUser("Jagjot singh"));
// console.log(greetUser("Ramandeep singh"));
// console.log(greetUser("Shivpreet singh"));

// ----------------------------------------------------------------------
// ### 2. Square of a Number
// Create `square(num)`
// - Return the square of the number
// - Call it with different values

// const squareNumber = (num1 , num2) => Math.pow(num1 , num2);
// console.log(squareNumber(2,5));


// const squareNumber = (num1 , num2) => {
//     Math.pow(num1 , num2);
//     return `The square of ${num1} with ${num2} is ${Math.pow(num1 , num2)}`
// }
// console.log(squareNumber(2,5));

// -------------------------------------------------------------------------

// ### 3. Age Eligibility
// Create `checkEligibility(age)`
// - If age ≥ 18 → return `"Eligible"`
// - Else → return `"Not Eligible"`

// const checkelegibility = (age) => {
//     if(age >= 18){
//         return "Eligible"
//     } else {
//         return "Not Eligible"
//     }
// }

// console.log(checkelegibility(17));

// ------------------------------------------------------------------------
// ## 4. Full Name Generator
// Create `getFullName(firstName, lastName)`
// - Return full name
// - Print the returned value

// const getFullName = (firstName, lastName) => {
//     return `${firstName} ${lastName}`
// }
// console.log(getFullName("Jagjot","singh"));

// ------------------------------------------------------------------------

// Create functions:

// - `add(a, b)`
// - `subtract(a, b)`
// - `multiply(a, b)`

// Call each with different arguments.

// const calculator = (a , b) => {
//    console.log(`Addition = ${a} + ${b}  = ${a + b}`);
//   console.log(`Subtraction = ${a} - ${b}  = ${a - b}`);
//   console.log(`Multiplication = ${a} * ${b}  = ${a * b}`);
//   return;
// }
// console.log(calculator(20, 10));
// --------------------------------------------------------------------------
// ### 6. Grade System

// Create:
// ```jsx
// getGrade(percentage)
// ```
// Return:
// - A → 80+
// - B → 60–79
// - C → 40–59
// - Fail → below 40

// const gradeSystem = (num) => {
//      if (num >= 80){
//         return "Grade A";
//     }  else if (num <= 79 && num >= 60){
//         return "Grade B"
//     }  else if (num <= 59 && num > 40){
//         return "Grade c"
//     } else if ( num <= 40){
//         return "Fail"
//     } else {
//         return "enter Valid Number"
//     }
// }
// console.log(gradeSystem(80));

// ---------------------------------------------------------------------------
// ### 7. Login Validation

// Create:

// ```jsx
// login(username, password)
// ```

// Rules:

// - username = `"admin"`
// - password = `"1234"`

// Return `"Login Successful"` or `"Invalid Credentials"`

// const loginValidation = (username, password) => {
//      let dbusername = "admin";
//     let dbpassword = 1234;
//        if (username === dbusername &&  password === dbpassword) {
//         return "Login Successful"
//        }
//        else {
//         return "Invalid Credentials"
//        }
// }

// console.log(loginValidation("admin" , 1234));

// -------------------------------------------------------------------------------


// ### 8. Function Reuse
// **Concept:** DRY principle
// Create:
// ```jsx
// isEven(number)
// ```
// Use it inside another function:
// ```jsx
// checkNumber(number)
// ```
// Return `"Even"` or `"Odd"`

 
// let CheckNumber = (num) =>{
//          if (num % 2 === 0){
//         return "Number id Even"
//     } else {
//         return "Number is odd"
//     }
// }
// console.log(CheckNumber(22222201222222221));
