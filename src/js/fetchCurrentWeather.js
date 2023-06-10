import { API_KEY } from "./API_KEY.js";
import { renderCityWeatherInfos } from "./renderCityWeatherInfos.js";

/**
 * Returns the current weather info for a given latitude and longitude.
 *
 * @param {number} latitude - The latitude to search for weather info.
 * @param {number} longitude - The longitude to search for weather info.
 * @fires renderCityWeatherInfos passing the retrieved weather info
 *
 * @author Aline Bevilacqua
 */
export default async function fetchCurrentWeather(latitude, longitude) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=pt_br`);
    const data = await response.json();
    renderCityWeatherInfos(data);
}
