/**
 * Renders the city weather information on the page.
 *
 * @param {object} params - An object containing the weather, main, sys, wind, dt, and name information.
 * @param {array} params.weather - An array containing the weather description and icon.
 * @param {object} params.main - An object containing the main weather information.
 * @param {object} params.sys - An object containing the sunrise and sunset information.
 * @param {object} params.wind - An object containing the wind speed information.
 * @param {number} params.dt - The date and time in seconds.
 * @param {string} params.name - The name of the city.
 * @return {void} This function does not return anything.
 *
 * @author Aline Bevilacqua
 */
export function renderCityWeatherInfos({ weather, main, sys, wind, dt, name }) {
    const { description, icon } = weather[0];
    const { temp, feels_like, humidity } = main;
    const { speed } = wind;
    const { sunrise, sunset } = sys;

    //Header info
    document.querySelector(".header__current-date").textContent = Intl.DateTimeFormat("pt-br", {
        weekday: "short",
        month: "long",
        day: "2-digit",
    }).format(new Date(dt * 1000));
    document.querySelector(".header__city-name").textContent = name;

    //Current temperature info
    document.querySelector(".current-temperature__weather-icon").src = `./src/assets/${icon}.svg`;
    document.querySelector(".current-temperature__description").textContent = description;
    document.querySelector(".current-temperature__value").textContent = `${Math.round(temp)}°C`;

    //Bottom container info
    document.getElementById("feels-like").textContent = `${Math.round(feels_like)}°C`;
    document.getElementById("wind").textContent = `${Math.round(speed * 3.6)} km/h`;
    document.getElementById("humidity").textContent = `${Math.round(humidity)}%`;
    document.getElementById("sunrise").textContent = `${Intl.DateTimeFormat("pt-br", { timeStyle: "short" }).format(new Date(sunrise * 1000))}`;
    document.getElementById("sunset").textContent = `${Intl.DateTimeFormat("pt-br", { timeStyle: "short" }).format(new Date(sunset * 1000))}`;
}
