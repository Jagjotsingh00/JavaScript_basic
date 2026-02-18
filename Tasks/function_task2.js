
// ### 1. Greeting Function

// Create a function `greetUser(name)`

// - It should return: `Hello <name>`
// - Call the function with **3 different names**

// // console.log(functionTest());

//   function greetUser(name) {
//     return `Hello ${name}`
//   }

// console.log(greetUser("jagjot singh"));
// console.log(greetUser("Harshdeep singh"));
// console.log(greetUser("charry"));


// --------------------------------------------------------------------
// ### 2. Square of a Number

// Create `square(num)`

// - Return the square of the number
// - Call it with different values

// function square(num1 , num2){
//      Math.pow(num1 , num2);
//      return `Square of ${num1} with power ${num2} is ${ Math.pow(num1 , num2)}`
// }

// console.log(square(2,5));

// ### 3. Age Eligibility

// Create `checkEligibility(age)`

// - If age ≥ 18 → return `"Eligible"`
// - Else → return `"Not Eligible"`

// function checkEligibility(age) {
//     if (age >= 18){
//         return `You are Eligible`
//     }else {
//         return ` you are Not Eligible`
//     }
// }
// console.log(checkEligibility(18));

// ## 4. Full Name Generator

// Create `getFullName(firstName, lastName)`

// - Return full name
// - Print the returned value

// function getFullName(firstName, lastName){
//     return `${firstName} ${lastName}`
// }

// console.log(getFullName("Jagjot", "singh"));

// ### 5. Simple Calculator

// Create functions:

// - `add(a, b)`
// - `subtract(a, b)`
// - `multiply(a, b)`

// Call each with different arguments.

// function calculateValues(a, b) {
//   console.log(`Addition = ${a} + ${b}  = ${a + b}`);
//   console.log(`Subtraction = ${a} - ${b}  = ${a - b}`);
//   console.log(`Multiplication = ${a} * ${b}  = ${a * b}`);
//   return;
// }

// console.log(calculateValues(10, 5));



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


// function GradeSystem(num){
//     if (num >= 80){
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
//  console.log(GradeSystem(80));
 

//===============================================================================================================================

// ### 7. Login Validation

// Create:

// ```jsx
// login(username, password)
// ```

// Rules:

// - username = `"admin"`
// - password = `"1234"`

// Return `"Login Successful"` or `"Invalid Credentials"`


// function loginValidation(username , password) {
//     let dbusername = "admin";
//     let dbpassword = 1234;
//        if (username === dbusername &&  password === dbpassword) {
//         return "Login Successful"
//        }
//        else {
//         return "Invalid Credentials"
//        }
// }


// console.log(loginValidation("admin" , 1234));


//===============================================================================================================================


// ### 8. Function Reuse

// **Concept:** DRY principle

// 👉 Create:

// ```jsx
// isEven(number)
// ```

// Use it inside another function:

// ```jsx
// checkNumber(number)
// ```

// Return `"Even"` or `"Odd"`


// function checkNumber(num) {
//     if (num % 2 === 0){
//         return "Number id Even"
//     } else {
//         return "Number is odd"
//     }
// }
// console.log(checkNumber(20));
