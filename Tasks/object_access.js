const weatherAPI = {
  status: "success",
  lastUpdated: "12:55 PM",
  data: {
    location: {
      city: "Ludhiana",
      country: "India",
    },
    forecast: [
      { day: "Monday", temp: 22, conditions: "Sunny" },
      { day: "Tuesday", temp: 18, conditions: "Cloudy" },
      { day: "Wednesday", temp: 15, conditions: "Rain" },
    ],
  },
};

// console.log(weatherAPI.data.location.city);
// console.log(weatherAPI.data.forecast[1].temp);
// console.log(weatherAPI.data.forecast[2].conditions);

// console.log(Object.keys(weatherAPI.data.location));

// let key = Object.keys(weatherAPI.data.location.city).find(k => weatherAPI.data.location[k] == "Ludhiana")
// console.log(key);
// console.log(Object.keys(weatherAPI.data.location));

// let location = weatherAPI.data.location;
// let keyForLudhiana ;
// for (let key in location) {
//     if (location[key] === "Ludhiana") {
//         keyForLudhiana = key
//     }
// }
// console.log(keyForLudhiana);

// let forcasts = weatherAPI.data.forecast[1];
// let keyfor18temp ;
// for (let key in forcasts) {
//     if (forcasts[key]=== 18){
//        keyfor18temp  = key
//     }
// }
// console.log(keyfor18temp);

// let forcast = weatherAPI.data.forecast[2];
// let keyforRain ;
// for (let key in forcast) {
//     if (forcast[key]=== "Rain"){
//         keyforRain = key
//     }
// }
// console.log(keyforRain);

// -----------------------------------------------------------------------------------------------------------------

// for (const x in weatherAPI) {
//  console.log(`key : ${x}`);
//  console.log(`key : ${x}  value : ${weatherAPI[x]}`);
// }

// let user = {
//   Name: "Jagjot singh",
//   Class: "MCA",
// greet: function(){
//   console.log(`My name is ${this.Name}`);
// }
// }
// user.greet()

// ---------------------------------------------------------------------------------------------------------------------

// Write the JavaScript code required to complete each task. Do not change the original starting data unless the task tells you to.

// Task 1: Modifying Objects (Add, Update, Delete)
// Data:

const intern = {
  name: "Jagjot",
  role: "Trainee",
  city: "Ludhiana",
};
// Your Goal:
// Add a new property called company and set it to "Vidya Corporation".
// Update the role from "Trainee" to "Junior Developer".
// Delete the city property.
// console.log the final intern object to prove it worked.

// intern.company = "Vidya Corporation";
// console.log(intern);

// intern.role = "Junior Developer";
// console.log(intern);

// delete intern.city;
// console.log(intern);

// -------------------------------------------------------------------------
// Task 2: Navigating Nested Data (Arrays inside Objects)
// Data:
const info = [
  { rollNo: 1, name: "Rahul", marks: [78, 82, 91, 66] },
  { rollNo: 2, name: "Aman", marks: [90, 91, 92, 93] },
  { rollNo: 3, name: "Riya", marks: [99, 45, 98, 92] },
  { rollNo: 4, name: "Karan", marks: [35, 40, 20, 60] },
];
// Your Goal:
// Write a console.log to print Riya's 3rd mark (which is 98).
// Write a console.log to print Karan's 1st mark (which is 35).

// console.log(`${info[2].name}  ${info[2].marks[2]}`);

// console.log(`${info[3].name}  ${info[3].marks[0]}`);

// ---------------------------------------------------------------------------------------
// Task 3: Object Methods & The this Keyword
// Your Goal: Create an object called smartphone with the following properties:
// brand: "Apple"
// model: "iPhone 15"
// battery: "100%"
// showDetails: A function (method) that uses the this keyword to print exactly: "This phone is an Apple iPhone 15."
// Call the showDetails() method to test it.

// const smartphone = {
//   brand: "Apple",
//   model: "iPhone 15",
//   battery: "100%",
//   showdetails : function (){
//     console.log(`This phone is an ${this.brand} ${this.model} whose battery is ${this.battery} `);

//   }
// };
// smartphone.showdetails()

// Task 4: The for...in Loop
// Data:
// JavaScript
const course = {
  title: "Web Development",
  duration: "6 Months",
  fees: 15000,
};
// Your Goal: Write a for...in loop that goes through the course object and prints a sentence for each property exactly like this:
// "The title is Web Development"
// "The duration is 6 Months"
// "The fees is 15000"
// for (const key in course) {
// console.log(`The ${key} is ${course[key]}`);
// }

// ===========================================================================================================

// Task = The Inventory Cleaner (Submit this By 2:00 P.M.)

const storeInventory = {
  laptop: { price: 50000, stock: 5 },
  mouse: { price: 500, stock: 0 }, // Out of stock!
  keyboard: { price: 1500, stock: 10 },
  monitor: { price: 10000, stock: 0 }, // Out of stock!
};

// Your Goal:
// Output should look exactly like this:
// {
//   laptop: { price: 50000, stock: 5, totalValue: 250000 },
//   keyboard: { price: 1500, stock: 10, totalValue: 15000 }
// }

for (const key in storeInventory) {
  if (storeInventory[key].stock === 0) {
    delete storeInventory[key];
  } else {
         storeInventory[key].totalvalue = storeInventory[key].price * storeInventory[key].stock
  }
}

console.log(storeInventory);
