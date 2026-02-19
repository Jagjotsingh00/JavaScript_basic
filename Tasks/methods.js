const dressCatalog = [
  { id: 101, name: "Summer Floral Dress", price: 1500, inStock: true },
  { id: 102, name: "Velvet Evening Gown", price: 4500, inStock: false },
  { id: 103, name: "Cotton A-Line Kurti", price: 800, inStock: true },
  { id: 104, name: "Sequin Party Dress", price: 3200, inStock: true },
];
// ---------------------------------------------------------------
// dressCatalog.forEach((x) => {
//   console.log(x.name);
// });

// dressCatalog.forEach((x) => {
//   console.log(x.id);
// });
// ---------------------------------------------------------------

// dressCatalog.map((x) => {
//   console.log(x.id);
// });

// dressCatalog.map((x) => {
//   console.log(x.name);
// });

// --------------------------------------------------------------------

// let a = dressCatalog.filter((x) => {
//     return x.inStock === false;
// })
// console.log(a);

// --------------------------------------------------------------------

// let a = dressCatalog.find((x) => {
//     return x.inStock === true;
// })
// console.log(a);

// --------------------------------------------------------------------

const singleDress = {
  id: 999,
  name: "Winter Jacket",
  price: 2500,
};


// -------------------------------------------------------------------

// console.log(Object.keys(singleDress));

// -------------------------------------------------------------------

// console.log(Object.values(singleDress));

// -------------------------------------------------------------------

// console.log(Object.entries(singleDress));

// -------------------------------------------------------------------


// let num = [1, 2, 3, 4];
// let string = num.tostring();
// console.log(string);

// ---------------------------------------------------------------------

// let string = "Hello";
// let array = Array.from(string);
// console.log(array);


// -------------------------------------------------------------------

var age = 12

let student = {
  name : "Jagjot" ,
  class : "MCA" ,
  rollNumber : 21,
  // greet : (a,b) => {
  //   console.log(`Hello, ${this.name}`);
  //   return a + b
  // },
  greet :  function (a,b)  {
    console.log(`Hello, ${this.name}  `);
    return a + b
  }

}
// student.greet(2,3)
console.log(student.greet(2,3));



