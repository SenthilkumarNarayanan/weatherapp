const apiKey = process.env.API_KEY;
const baseUrl = process.env.API_URL;


const searchInput = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const wIcon = document.querySelector(".w-icon")


async function checkWeather(city) {
    const response = await fetch(baseUrl + `current.json?key=${apiKey}` + `&q=${city}`)
    if (response.status == 400) {

        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.current.wind_kph + " km/h";
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".w-icon").src = (data.current.condition.icon);
        document.querySelector(".error").style.display = "none";

    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
})

