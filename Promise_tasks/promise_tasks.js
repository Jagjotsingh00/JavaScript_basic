// * JAVASCRIPT PROMISES PRACTICE SHEET
//  * * Instructions:
//  * 1. Create a new file 'promises.js' or use your browser console.
//  * 2. Solve the tasks below one by one.
//  * 3. Use .then() and .catch() to handle results.
//  *******************************************************/
/* TASK 1: The Simple Success
1. Create a Promise called 'simplePromise'.
2. Inside, use resolve("Success!").
3. Consume the promise and log the message.
*/

// const simplePromise = () => {
//    return new Promise((resolve) => {
//       resolve ("Success!")
//    })
// }
// simplePromise().then((message) => {
//    console.log(message);
// } )

// ----------------------------------------------------------------------------------
/* TASK 2: The Conditional Promise
1. Create a variable `isLogged = true`.
2. Create a Promise.
3. If `isLogged` is true, resolve("User is logged in").
4. If false, reject("User not logged in").
5. Test it by changing the variable.
*/

// const user = () => {
//    let isLogged  = false;
//    return new Promise((resolve, reject) => {
//      if(isLogged){
//       resolve("User is logged in")
//      }else{
//       reject("User not logged in")
//      }
//    })
// }
// user().then((message) => {
//    console.log(message);
// })
// .catch((error) => {
//    console.log(error);
// })

// ---------------------------------------------------------------------

/* TASK 3: The Delay Function (Very Common!)
1. Create a function `wait(ms)` that returns a Promise.
2. Inside, use `setTimeout` to resolve after `ms` milliseconds.
3. Usage: wait(2000).then(() => console.log("Waited 2 seconds!"));
*/

// const wait = (ms) => {
//    return new Promise((resolve, reject) => {
//       setTimeout(()=> {
//          resolve("Waited 2 seconds!")
//       },ms)
//    })
// }
// wait(2000).then((message) => {
//    console.log(message);
// })

// ------------------------------------------------------------------------
/* TASK 4: The Dice Roll
1. Create a Promise that generates a random number (1-6).
2. If the number is 6, resolve("Jackpot! 🎲").
3. If the number is 1-5, reject("You lost. Rolled a " + number).
4. Handle both cases.
*/

// const diceRoll = () => {
//   let num =  Math.floor(Math.random() * 6) + 1;
//    return new Promise((resolve, reject) => {
//       if(num === 6){
//          resolve ("Jackpot! 🎲")
//       }else(
//          reject("You lost. Rolled a " + num)
//       )
//    })
// }
// diceRoll().then((message) => {
//    console.log(message);
// })
// .catch((error) => {
//    console.log(error);
// })

// --------------------------------------------------------------------------------------


/* TASK 5: The Morning Routine (Chaining)
1. Create 3 functions that return Promises:
   - `shower()` -> Resolves "Showered!" after 2s.
   - `dress()` -> Resolves "Dressed!" after 2s.
   - `eatBreakfast()` -> Resolves "Ate food!" after 3s.
2. Chain them: shower -> .then(dress) -> .then(eat) -> .then(log "Ready to go!").
*/

// const shower = () => {
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve ("Showered!");
//     }, 2000);
//    })
// }
// const dress = () => {
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve ("Dressed!");
//     }, 2000);
//    })
// }
// const eatBreakfast = () => {
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve ("Food!");
//     }, 3000);
//    })
// }

// shower()
// .then((message) => {
//    console.log(message);
//    dress().then((message) => {
//       console.log(message);
//       eatBreakfast().then((message) => {
//          console.log(message);
//          console.log("Ready to go!");
//       })
//    })
// })

// ----------------------------------------------------------------------------------


/* TASK 6: The Calculator Chain (Passing Data)
1. Create a Promise that resolves with the number 5.
2. .then() -> multiply by 2 (should return 10).
3. .then() -> add 20 (should return 30).
4. .then() -> log the final result.
*/

// const calculator = (num) => {
//   return new Promise((resolve, reject) => {
//      setTimeout(() => {
//       resolve ( 5 )
//      }, 2000);
//    })
//    multiply()
// }

// const multiply = (num) => {
//    return new Promise((resolve, reject) => {
//       setInterval(() => {
//           resolve( num * 2);
//       }, 1000);
//    })
// }
// const addtiion = (num) => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve(num + 20)
//       }, 1500);
//    })
// }

// calculator(5).then((num) => {
// console.log(`the number is ${num}`);
//    multiply(num).then((num) => {
//       console.log(`multiply by 2 is ${num}`);
//       addtiion(num).then((num) => {
//          console.log(`add 20 is ${num}`);
//          console.log(`the final result is ${num}`);
//          return;
//       })
//    })
//    return ;
// })


/* TASK 7: The File Downloader
1. Create a function `downloadFile(url)`.
2. Resolve "Downloaded [url]" after 3s.
3. Create a function `compressFile(file)`.
4. Resolve "Compressed [file]" after 2s.
5. Chain them: download -> compress -> log "Done!".
*/

const downloadFile = (url) => {
return new Promise((resolve, reject) => {
setTimeout(() => {
   resolve ("Downloaded [url]")
}, 3000);
});
};

const compressed  = (file) => {
return new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve ("Compressed [file]")
   }, 2000);
});
};

downloadFile("google.com").then((url) => {
   console.log(url);
   compressed("file").then((file) => {
      console.log(file);
   })
})