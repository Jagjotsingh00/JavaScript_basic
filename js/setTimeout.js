// JavaScript is "Single Threaded". It can only do ONE thing at a time.
// If one line takes 10 seconds, the whole website FREEZES.
// We call this "Blocking".

// 3

// ASYNC SOLUTION: We schedule tasks for later so the app keeps running.
// setTimeout(function, milliseconds)
// setTimeout(()=>{
//     console.log(`4. Takes 4 seconds to print`)
// }, 4000)

// setTimeout(() => {
//     console.log("2. This runs after 2 seconds...");
// }, 2000);

// console.log("3. Finish App");
// OUTPUT: 1. Start -> 3. Finish -> (Wait 2s) -> 2. This runs...

// ==========================================
// 2. TIMERS (Repeated Actions)
// ==========================================
// setInterval(function, milliseconds) -> Runs over and over again.
// clearInterval(id) -> Stops it.

// console.log("\n--- 2. setInterval ---");

let count = 0;

// Start the timer and save its ID so we can stop it later
const timerId = setInterval(() => {
     count++;
     console.log("Timer Count:", count);

     // LOGIC: Stop after 5 seconds
     if (count === 5) {
         clearInterval(timerId); // <--- STOP command
         console.log("Timer Stopped! :white_check_mark:");
     }
}, 1000); // 1000ms = 1 second

