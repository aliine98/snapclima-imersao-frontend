import fetchCurrentWeather from "./fetchCurrentWeather.js";
import { getSearchedCity } from "./getSearchedCity.js";

const darkLightButton = document.querySelector(".menu__button");

darkLightButton.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
});

//get location if supported by the browser
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        fetchCurrentWeather(latitude, longitude);
    });
}

//Search button call function on click
document.querySelector(".header__button").addEventListener("click", getSearchedCity);