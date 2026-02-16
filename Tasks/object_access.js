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




location = weatherAPI.data.location;
let keyForLudhiana ; 
for (let key in location) {
    if (location[key] === "Ludhiana") {
        keyForLudhiana = key
    }
}
console.log(keyForLudhiana); 
