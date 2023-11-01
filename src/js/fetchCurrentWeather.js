import { renderCityWeatherInfos } from './renderCityWeatherInfos.js';
import * as dotenv from 'dotenv';
dotenv.config();

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
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}&units=metric&lang=pt_br`
        );
        const data = await response.json();
        renderCityWeatherInfos(data);
    } catch (error) {
        console.log(error);
    }
}
