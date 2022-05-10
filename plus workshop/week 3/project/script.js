let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};
let output = "";
let whitchCity = prompt("whitch City do you want to search?");
if (typeof weather[whitchCity] !== "undefined") {
  output = `in ${whitchCity} city the weather temp is ${weather[whitchCity].temp} and the humidity is ${weather[whitchCity].humidity}`;
} else {
  output = `Sorry :( we dont have any data for ${whitchCity} city!`;
}
alert(output);
