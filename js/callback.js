// // // ==========================================
// // // 3. CALLBACK FUNCTIONS (The "Core" Pattern)
// // // ==========================================
// // // A Callback is simply a function you pass to another function.
// // // "I give you this function. Please run it when you are done."

// console.log("\n--- 3. Callbacks ---");

// function downloadFile(url, downloadedCallback) {
//     console.log(`Processing ${url}...`);

//     // Simulate a 3-second download
//     setTimeout(() => {
//         console.log("Download Complete!");

//         // NOW run the next step
//         downloadedCallback();
//     }, 3000);
// }

// // USAGE:
// downloadFile("movie.mp4", function() {
//     console.log("Now playing the movie! :clapper:");
// });

// 1. Define the main task
function doHomework(subject, callback) {
  // console.log(`Starting my ${subject} homework... :memo:`); // Simulate working for 2 seconds
  // setTimeout(() => {
       console.log("Finished Homework! :white_check_mark:");
  // NOW run the next step (The Callback)

  callback(); // }, 2000);
}

// 2. Define the callback function
function playGame() {
  console.log("Now I can play FIFA! :video_game:");
}

// 3. Run them together
// We pass 'playGame' into 'doHomework'
doHomework("Math", playGame);

 