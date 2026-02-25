// SET TIME

// setTimeout(() => {
//     console.log(`Jagjot Singh`);
// },2000);

// console.log(`Hello`);

// setTimeout(() => {
//     console.log(`how are you`);
// }, 4000);

// --------------------------------------------------------------------------

// TIME INTERVAL (REPEAT)

// let count = 0 ;
// let time = setInterval(() => {
//     count++ ;
// console.log(`counter : ${count}`);

//     if(count === 7){
//         clearInterval(time);
//         console.log("stop");
//     }
// }, 1000);

// ---------------------------------------------------------------------------

// CALL BACK

// const fullName = (firstName , nameOfFunction)  => {
//     console.log(` ${firstName}`);
// nameOfFunction()
// }

//   let secondName = () => {
//     console.log(` singh `);
// }
//   let name = () => {
//     console.log(` sembhi`);
// }
// fullName("Jagjot", secondName)

// ====================================================================================================

// Task 1: The Bomb Countdown (setInterval)
// Create a function startBomb().
// It should countdown from 5 to 1 every second.
// When it hits 0, print "BOOM!" and stop the interval.

// solution :

// let counter = 5 ;
// const startBomb = setInterval (() => {
//     counter-- ;
//     console.log(counter);

// if(counter === 0){
//     clearInterval(startBomb);
//     console.log(`BOOM!`);
// }
// },1000);

// -----------------------------------------------------------------------------------------------

// Task 2: The Delayed Button (setTimeout + DOM)
// • HTML: <button id="magic-btn">Click Me</button> and <h2 id="text">Waiting...</h2>
// • JS: When the button is clicked:
// Change text to "Loading...".
// Wait 3 seconds.
// Change text to "Welcome to Async JS!".

// solution :

const magicBtn = document.getElementById("magic-btn");
const heading = document.getElementById("text");

magicBtn.addEventListener("click", () => {
  heading.innerText = "Loading...";
  setTimeout(() => {
    heading.innerText = "Welcome to Async JS!";
  }, 3000);
});

// -----------------------------------------------------------------------------------------------

// Task 3: The Digital Clock (Real World)
// • HTML: <h1 id="clock">00:00:00</h1> and <button id="stop-btn">Stop Clock</button>.
// • JS:
// Create a function updateTime() that gets new Date().toLocaleTimeString() and puts it in the h1.
// Use setInterval to run this function every 1000ms (1 second).
// When the "Stop Clock" button is clicked, freeze the time using clearInterval.

// solution :

const timeClock = document.getElementById("clock");
const stopBtn = document.getElementById("stop-btn");

const update = setInterval(() => {
  timeClock.innerText = new Date().toLocaleTimeString();
}, 1000);

stopBtn.addEventListener("click", () => {
  clearInterval(update);
});

// Task 4: The "Callback Hell" Simulation
// • Goal: Show them why Callbacks can get messy (to prepare for Promises).
// • Write 3 functions:
// step1(callback) -> prints "Step 1 done" after 1 sec.
// step2(callback) -> prints "Step 2 done" after 1 sec.
// step3(callback) -> prints "Step 3 done" after 1 sec.
// • Call them nested inside each other so they run in order: 1 -> 2 -> 3.
// Hint: step1(() => { step2(() => { step3(...) }) })


function userdata(function1) {
  setTimeout(() => {
    console.log("step 1 done");
    function1();
  }, 1000);
}

function functionOne( function1) {
  setTimeout(() => {
    console.log("step 2 done");
    function1();
  }, 1000);
}

function functionTwo( function1) {
  setTimeout(() => {
    console.log("step 3 done");
    function1();
  }, 1000);
}
userdata(()=>{functionOne(()=>{functionTwo(()=>{console.log("done");});});});


