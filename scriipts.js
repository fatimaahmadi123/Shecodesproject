let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let time = document.querySelector(".info");
time.innerHTML = `${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let searchform = document.querySelector("#search-form");

searchform.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let message = `${temperature}`;
  let degree = document.querySelector(".city-degree");
  degree.innerHTML = message;
}

let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
let units = "metric";
let city = "sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&${units}`;

axios.get(apiUrl).then(showTemperature);
