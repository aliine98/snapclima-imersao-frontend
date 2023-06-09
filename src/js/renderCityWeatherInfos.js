export function renderCityWeatherInfos({ weather, main, sys, wind, dt, name }) {
    const { description, icon } = weather[0];
    const { temp, feels_like, humidity } = main;
    const { speed } = wind;
    const { sunrise, sunset } = sys;

    //Header info
    document.querySelector(".header__current-date").innerHTML = Intl.DateTimeFormat("pt-br", {
        weekday: "short",
        month: "long",
        day: "2-digit",
    }).format(new Date(dt * 1000));
    document.querySelector(".header__city-name").innerHTML = name;

    //Current temperature info
    document.querySelector(".current-temperature__weather-icon").src = `./src/assets/${icon}.svg`;
    document.querySelector(".current-temperature__description").innerHTML = description;
    document.querySelector(".current-temperature__value").innerHTML = `${Math.round(temp)}°C`;

    //Bottom container info
    document.getElementById("feels-like").innerHTML = `${Math.round(feels_like)}°C`;
    document.getElementById("wind").innerHTML = `${Math.round(speed * 3.6)} km/h`;
    document.getElementById("humidity").innerHTML = `${Math.round(humidity)}%`;
    document.getElementById("sunrise").innerHTML = `${Intl.DateTimeFormat("pt-br", { timeStyle: "short" }).format(new Date(sunrise * 1000))}`;
    document.getElementById("sunset").innerHTML = `${Intl.DateTimeFormat("pt-br", { timeStyle: "short" }).format(new Date(sunset * 1000))}`;
}
