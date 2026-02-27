// TASK 1: The Exam Result
// 1. Create a function 'checkExam(score)' that returns a Promise.
// 2. If score >= 33, resolve("Passed! :mortar_board:").
// 3. If score < 33, reject("Failed. :cry:").
// 4. Call the function with score 80 and handle the result.

//  
// ----------------------------------------------------------------------------------

// TASK 2: The Pizza Chain
// 1. Create 3 functions that return Promises:
//    - placeOrder() -> Resolves "Order Placed" after 2s.
//    - preparePizza() -> Resolves "Pizza Baked" after 3s.
//    - deliverPizza() -> Resolves "Delivered!" after 1s.
// 2. Chain them: placeOrder -> .then(prepare) -> .then(deliver) -> .then(print "Time to Eat!").

// const placeOrder = (preparePizza) => {
//   return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve ("Order Placed");
//     },2000);
// preparePizza()
//   });
// };
// const preparePizza = (deliverPizza) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Pizza Baked");
//         },3000);
//     })
//     deliverPizza()
// }
// const deliverPizza = () => {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve ("Delivered!")
//         },1000)
//     })
// }

// const placeOrder = () => {
//   return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve ("Order Placed");
//     },2000);
//   });
// };
// const preparePizza = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Pizza Baked");
//         },3000);
//     })
// }
// const deliverPizza = () => {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve ("Delivered!")
//         },1000)
//     })
// }
// placeOrder()
// .then((message) => {
//     console.log( message);
//     return preparePizza()
// }).then((message) => {
//     console.log( message);
//     return deliverPizza()
// }).then((message) => {
//     console.log( message)
// }).then(() => {
//       console.log("Time to Eat!");
// })


// TASK 3: The System Failure (Boss Level)
// 1. Create a function 'connectToServer()'.
// 2. Use setTimeout to wait 2 seconds.
// 3. Always REJECT with the message: "Server Timeout! Try again."
// 4. Handle the error using .catch() and print "System Error: Server Timeout!"

// const connectToServer = () => {
//     return new Promise(( resolve , reject) => {
//             setTimeout(() => {
//             reject("Server Timeout! Try again.")
//     }, 2000);
// })
// }
// connectToServer().catch((error) => {
//     console.log( error ,"System Error: Server Timeout!" );
// })


// const ageCheck = (age) => {
//     return new Promise ((resolve,reject) => {
//         if (age >= 18) {
//             resolve("Adult")
//         }else{
//             reject("You are not adult")
//         }
//     })
// }




function function1() {
   return new Promise ((resolve) => {
    setTimeout (() => {
    resolve("success data 1")
    },2000)
   });
}
function function2() {
   return new Promise ((resolve) => {
    setTimeout (() => {
    resolve("success data 2")
    },2000)
   });
}
function1().then((name) => {
    console.log(name);
function2().then((name) => {console.log(name);
})
})

