import { API_KEY } from "./API_KEY.js";
import { renderCityWeatherInfos } from "./renderCityWeatherInfos.js";

export default function fetchCurrentWeather(latitude, longitude) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=pt_br`)
		.then((response) => response.json())
		.then((data) => {
			renderCityWeatherInfos(data);
		});
}
