import { API_KEY } from "./API_KEY.js";
import fetchCurrentWeather from "./fetchCurrentWeather.js";

/**
 * Asynchronously gets the latitude and longitude of the searched city using the Geocoding API
 * and fetches the current weather data for that location.
 *
 * @fires fetchCurrentWeather passing the retrieved latitude and longitude
 *
 * @author Aline Bevilacqua
 */
export async function getSearchedCity() {
    const city = document.querySelector(".header__input").value;

    //Get lat and lon of the city from Geocoding API
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
    const data = await response.json();
    const { lat, lon } = data[0];

    //Clear search input
    document.querySelector(".header__input").value = "";

    fetchCurrentWeather(lat, lon);
}