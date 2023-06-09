import { API_KEY } from "./API_KEY.js";
import { renderCityWeatherInfos } from "./renderCityWeatherInfos.js";

export default async function fetchCurrentWeather(latitude, longitude) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=pt_br`);
    const data = await response.json();
    renderCityWeatherInfos(data);
}
