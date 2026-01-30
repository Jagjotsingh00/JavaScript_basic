// * ===============================
//    TASK 1: Even or Odd
// ================================ */
// Take a number and check if it is even or odd
// Use modulus (%) operator

// Write your code below
// Ans---------------------------------------------------------------------------------------------------
// let num = 122 ;

// if (num % 2 == 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

/* ===============================
   TASK 2: Voting Eligibility
================================ */
// Take age
// If age >= 18 → Eligible to vote
// Else → Not eligible

// Write your code below
// Ans---------------------------------------------------------------------------------------------------
// var age = 20;
// if (age >= 18 ) {
//     console.log("Eligible to vote");
//    } else if (age <= 0) {
//        console.log(" Enter Valid Age");
//    } else {
//        console.log(" Not eligible");
//    } 
    
/* ===============================
   TASK 3: Positive, Negative or Zero
================================ */
// Take a number
// Check if number is positive, negative or zero
// Use if – else if – else

// Write your code below
// Ans---------------------------------------------------------------------------------------------------
// var num = 1;
// if (num > 0) {
//     console.log("Number is positive");
// } else if (num === 0) {
//     console.log("Zero");
// } else {
//     console.log("Number is negtive");
// }

/* ===============================
   TASK 4: Grade Calculator
================================ */
// Take marks
// marks >= 90 → Grade A
// marks >= 75 → Grade B
// marks >= 50 → Grade C
// Else → Fail

// Write your code below
// Ans-----------------------------------------------------------------------------------------------------

// marks = 74;
// if (marks >= 90){
//     console.log("Grade A");
// }else if (marks >=75 ){
//     console.log("Grade B");
// }else if (marks >= 50){
//     console.log("Grade C");
// }else{
//     console.log("Fail");
// }

/* ===============================
   TASK 5: Login System
================================ */
// Take username and password
// If both are correct → Login Successful
// Else → Login Failed
// Use logical AND (&&)

// Write your code below

// Ans--------------------------------------------------------------------------------------------------


// var userName = prompt("Enter the UserName");
// var password = prompt("Enter the Password")
// if ( userName == "Jagjot singh" && password == 12345 ){
//     console.log("Login Successful");
// } else{
//     console.log("Login Failed");
// }


/* ===============================
   TASK 6: Driving License Check (Nested If)
================================ */
// Take age and hasLicense (true/false)
// If age >= 18:
//   If hasLicense → Can drive
//   Else → Get license first
// Else → Too young to drive

// Write your code below

// Ans--------------------------------------------------------------------------------------------------

// let age = prompt("Enter your age");
// var  hasLicense = true;

// if (age < 18){
//     console.log("Too young to drive");
// }                                               
// else if ( hasLicense ){
// // else if (age >= 18 && hasLicense){
//   console.log("can Drive");
// }
// else {
//     console.log("Get license first");
// }
    


/* ===============================
   TASK 7: Discount Calculator
================================ */
// Take cartAmount
// If cartAmount >= 1000:
//   Apply 10% discount
// Else:
//   No discount
// Print final amount

// Write your code below

// Ans------------------------------------------------------------------------------------------------

// var cardAmount = 1000;
// if ( cardAmount < 1000){
//    console.log("No discount");
// } else if (cardAmount >= 1000){
//    console.log( (cardAmount *= 10) / 100 );
// }


/* ===============================
   TASK 8: Password Strength
================================ */
// Take passwordLength
// < 6 → Weak
// 6 to 9 → Medium
// >= 10 → Strong

// Write your code below
// Ans-------------------------------------------------------------------------------------------------
// var num = 123456789;
// let length = String(num).length;
// if (length < 6){
//    console.log("Weak");
// } else if (length >= 6 && length <= 9 ) {
//    console.log("Medium");
// } else if (length >= 10){
//    console.log("Strong");
// }


/* ===============================
   TASK 9: Admin Access
================================ */
// Take isAdmin and isEditor (true/false)
// If any one is true → Access Granted
// Else → Access Denied
// Use logical OR (||)

// Write your code below
// Ans-----------------------------------------------------------------------------------------------
// var isAdmin = false;
// var isEditor = false;

// if (isAdmin || isEditor ) {
//    console.log("Access Granted");
   
// } else {
//    console.log("Access Denied");
// }

   /* ===============================
   TASK 10: ATM Withdrawal
================================ */
// Take balance and withdrawAmount
// Conditions:
// - withdrawAmount > 0
// - withdrawAmount <= balance
// If valid:
//   Deduct amount using -=
//   Print remaining balance
// Else:
//   Print error message

// Write your code below
// Ans------------------------------------------------------------------------------------------------
// let balance =1000
// let withdrawAmount =300;
// if ( withdrawAmount > 0 && withdrawAmount <= balance) {
//    console.log(balance - withdrawAmount);
// } else {
//    console.log("Error message");
// }