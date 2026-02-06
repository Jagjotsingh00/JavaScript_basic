// // Nested Loop

// let num = 10

// for (let i = 0; i < num; i++) {
//     let str = ""
//     // console.log("*");
//     for(let j = 0 ; j<=i ; j++){
//         // console.log("*");
//         str = str + "* "
//     }

//     console.log(str); // * *
//     // str = ""
// }

// console.log("navjot");

// let num = 5;

// for (let i = 1; i <= num; i++) {
//   let str = "";
//   for (let j = 1; j <= num; j++) {
//     str = str + "* "
//   }
//   console.log(str);
// }

// ===================================================== with condition


// let num = 5;                                                                                                                                      
// for (let i = 1; i <= num; i++) { 
//   let string = "";
//   for (let j = 1; j <= num; j++) {                             
//     if(j <= i){
//         string = string + "* ";
//     }
//   }
//   console.log(string);
// }

// ===================================================
 
// let num = 5;
// for (let i = 1; i <= num; i++) {
//   let str = "";
//   for (let j = 1; j <= num; j++) {
//    if ( j <=( num - i)) {
//         str = str + "  ";
//     } else {
//         str = str + "* "
//     }
// }
//   console.log(str);
// }



// let num = 5

// for (let i = 0; i < num; i++) {
//     let str = ""
//     for (let j = 0; j < num-i; j++) {
//         str = str + "* "
//     } 
//     console.log(str);
// }

for (let i = 1; i <= num; i++) {
    let str = ""
    for (let j = 1; j <= (num - i + 1); j++) {  
        str = str + "* "
    }
    console.log(str);
}