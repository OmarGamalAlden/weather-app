let weatherOverAll =[];
let weather1 =[];
let weather2 =[];
let inputSerach = document.querySelector(".searchBar");


    getEgyptWeather();

async function getEgyptWeather() {

    let weather = await fetch("https://api.weatherapi.com/v1/forecast.json?key=848e4c9efef048e494f100521210205&q=cairo&days=3&aqi=no&alerts=no");

    weather = await weather.json();

    weatherOverAll = weather;

    weather1 = weather.forecast.forecastday[0];
    weather2 = weather.forecast.forecastday[1];

    //dispaly to day weather conditions
    document.querySelector('.today').innerHTML= `<span class="about">Weather Condition ToDay</span>
    <p class="date text-decoration-underline">${weatherOverAll.location.localtime}</p>
    <p class="country"><span class="name">${weatherOverAll.location.name},</span> ${weatherOverAll.location.country}</p>
    <p class="text">${`<span>Condition:</span> ${weather1.day.condition.text}`}</p>
    <div class="weatherIcon">${`<img  src="${weather1.day.condition.icon}">`}</div>
    <p class="temp">${weatherOverAll.current.temp_c + "°C"}</p>
    <div class="icons d-flex justify-content-center">
    <div class="icon">
        <i class="fa-solid fa-cloud-rain px-2 fs-4"></i>
        <p class="rain">${weatherOverAll.current.cloud + "%"}</p>
    </div>
    <div class="icon">
        <i class="fa-solid fa-wind px-2 fs-4"></i>
        <p class="windSpeed">${weatherOverAll.current.wind_kph + "kph"}</p>
    </div>
    <div class="icon">
        <i class="fa-solid fa-location-arrow px-2 fs-4"></i>
        <p class="windDirection">${weatherOverAll.current.wind_dir}</p>
    </div>
    </div>` ;

    //dispaly tomorow weather conditions
    document.querySelector('.tomorrow').innerHTML= `<span class="about1">Weather Condition Tomorrow</span>
    <p class="date1 text-decoration-underline">${weather2.date}</p>
    <p class="country1"><span class="name1">${weatherOverAll.location.name},</span> ${weatherOverAll.location.country}</p>
    <p class="text1">${`<span>Condition:</span> ${weather2.day.condition.text}`}</p>
    <div class="weatherIcon1">${`<img  src="${weather2.day.condition.icon}">`}</div>
    <p class="temp1">${weather2.day.avgtemp_c + "°C" }</p>
    <div class="icons1 d-flex justify-content-center">
    <div class="icon1">
        <i class="fa-solid fa-cloud-rain px-2 fs-4"></i>
        <p class="rain1">${"Chance of rain: " + weather2.day.daily_chance_of_rain +"%"}</p>
    </div>
    </div>`;
}

async function displayCountries() {
    
    let weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=848e4c9efef048e494f100521210205&q=${inputSerach.value}&days=3&aqi=no&alerts=no`);

    weather = await weather.json();

    weatherOverAll = weather;
    console.log(weatherOverAll);

    weather1 = weather.forecast.forecastday[0];
    weather2 = weather.forecast.forecastday[1];

    //dispaly to day weather conditions
    document.querySelector('.today').innerHTML= `<span class="about">Weather Condition ToDay</span>
    <p class="date text-decoration-underline">${weatherOverAll.location.localtime}</p>
    <p class="country"><span class="name">${weatherOverAll.location.name},</span> ${weatherOverAll.location.country}</p>
    <p class="text">${`<span>Condition:</span> ${weather1.day.condition.text}`}</p>
    <div class="weatherIcon">${`<img  src="${weather1.day.condition.icon}">`}</div>
    <p class="temp">${weatherOverAll.current.temp_c + "°C"}</p>
    <div class="icons d-flex justify-content-center">
    <div class="icon">
        <i class="fa-solid fa-cloud-rain px-2 fs-4"></i>
        <p class="rain">${weatherOverAll.current.cloud + "%"}</p>
    </div>
    <div class="icon">
        <i class="fa-solid fa-wind px-2 fs-4"></i>
        <p class="windSpeed">${weatherOverAll.current.wind_kph + "kph"}</p>
    </div>
    <div class="icon">
        <i class="fa-solid fa-location-arrow px-2 fs-4"></i>
        <p class="windDirection">${weatherOverAll.current.wind_dir}</p>
    </div>
    </div>` ;

    //dispaly tomorow weather conditions
    document.querySelector('.tomorrow').innerHTML= `<span class="about1">Weather Condition Tomorrow</span>
    <p class="date1 text-decoration-underline">${weather2.date}</p>
    <p class="country1"><span class="name1">${weatherOverAll.location.name},</span> ${weatherOverAll.location.country}</p>
    <p class="text1">${`<span>Condition:</span> ${weather2.day.condition.text}`}</p>
    <div class="weatherIcon1">${`<img  src="${weather2.day.condition.icon}">`}</div>
    <p class="temp1">${weather2.day.avgtemp_c + "°C" }</p>
    <div class="icons1 d-flex justify-content-center">
    <div class="icon1">
        <i class="fa-solid fa-cloud-rain px-2 fs-4"></i>
        <p class="rain1">${"Chance of rain: " + weather2.day.daily_chance_of_rain +"%"}</p>
    </div>
    </div>`;
}
