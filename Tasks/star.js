// let num = 5 ;
// for (let i = 0 ; i < num ; i++){
//     let string = "";
//     for(let j = 0 ; j < num ; j++ ){
//         string += "*"
//     }
//     console.log(string);
// }

//  let num = 5 ;
// for (i = 0 ; i < num ; i++ ){
//     let string = "" ;
//     for (let j = 0 ; j <= i ; j++){
//         string += "* " ;
//     }
//     console.log(string);
// }

// let num = 5;
// for (let i = 0 ; i < num ; i++){
// let str = "" ;
//  for (let j = 0 ; j <= num ; j++){
//     if (j < num - i){
//         str += "* "
//     }
//  }
//  console.log(str);
// }

let num = 5;
for (let i = 1; i <= num; i++) {
  let str = "";
  for (let j = 1; j < num; j++) {
    if (j < num - i) {
      str = str + "  ";
    } else {
      str += "* ";
    }
  }
  console.log(str);
}

// for (let i = 1; i <= 3; i++) {
//   console.log(`floor = ${i}`);
//   for (let j = 1; j <= 5; j++) {
//     console.log(`room = ${j}`);
//   }
// }
