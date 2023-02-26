let weatherCondition = [];
weatherCondition[1000]= "wi-day-sunny";
	weatherCondition[1003] = "wi-cloudy";
	weatherCondition[1006] = "wi-cloud";
	weatherCondition[1009] = "wi-day-sunny-overcast";
	weatherCondition[1030] = "wi-rain-wind";
	weatherCondition[1063] = "wi-rain-mix";
	weatherCondition[1066] = "wi-snow";
	weatherCondition[1069] = "wi-sleet";
	weatherCondition[1072] = "wi-showers";
	weatherCondition[1087] = "wi-windy";
	weatherCondition[1114] = "wi-snow";
	weatherCondition[1117] = "wi-snow-wind";
	weatherCondition[1135] = "wi-fog";
	weatherCondition[1147] = "wi-fog";
	weatherCondition[1150] = "wi-rain-mix";
	weatherCondition[1153] = "wi-rain-wind";
	weatherCondition[1168] = "wi-sprinkle";
	weatherCondition[1171 ]  ="wi-snowflake-cold";
	weatherCondition[1180] = "wi-rain";
	weatherCondition[1183]= "wi-rain";
	weatherCondition[1186]= "wi-showers";
	weatherCondition[1189]= "wi-showers";
	weatherCondition[1192]= "wi-rain";
	weatherCondition[1195]= "wi-rain";
	weatherCondition[1198]= "wi-rain";
	weatherCondition[1201]= "wi-rain";
	weatherCondition[1204]= "wi-sleet";
	weatherCondition[1207]= "wi-sleet";
	weatherCondition[1210]= "wi-snow";
	weatherCondition[1213]= "wi-snow";
	weatherCondition[1216]= "wi-snow";
	weatherCondition[1219]= "wi-snow";
	weatherCondition[1222]= "wi-snow";
	weatherCondition[1225]= "wi-snow";
	weatherCondition[1237]= "wi-snow";
	weatherCondition[1240]= "wi-rain";
	weatherCondition[1243]= "wi-rain";
	weatherCondition[1246]= "wi-rain";
	weatherCondition[1249]= "wi-sprinkle";
	weatherCondition[1252]= "wi-sleet";
	weatherCondition[1255]= "wi-snow";
	weatherCondition[1258]= "wi-snow";
	weatherCondition[1261]= "wi-snow";
	weatherCondition[1264]= "wi-snow";
	weatherCondition[1273]= "wi-rain-wind";
	weatherCondition[1276]= "wi-rain-wind";
	weatherCondition[1279]= "wi-snow-wind";
	weatherCondition[1282]= "wi-storm-showers";
	const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
window.onload = () => {
	let weather = document.querySelector('#weather');
	let currentWeather = document.querySelector('#current-weather');
	fetch('https://api.weatherapi.com/v1/forecast.json?key=88ce8833324748b0aaf121856231402&q=peak hill&days=7&aqi=no&alerts=no ')
		.then(res => res.json())
		.then((data) => {
			currentWeather.innerHTML = `<div class="col">
    <h3 class="text-upper">${data.location.name}</h3>
    <p>Local Weather</p>
    </div>
    <div class="col"><i class="large wi ${weatherCondition[data.current.condition.code]}"></i></i></div>
    <div class="col">
    <h2 class="temp">${data.current.temp_c}°C</h2>
    <p>${data.current.condition.text}</p>
    </div>`;
			data.forecast.forecastday.forEach(element => {
				let ele = `<div class="col">
        <p>${weekday[new Date(element.date).getDay()].substring(0,3)}</p><i title="${element.day.condition.text}" class="wi ${weatherCondition[element.day.condition.code]}"></i>
        <div class="temp">
          <p class="text-red">${element.day.maxtemp_c}°C</p>
        <p class="text-light-blue">${element.day.mintemp_c}°C</p>
        </div>
      </div>`;
				weather.insertAdjacentHTML("beforeend", ele);
			});
		}
		)
}

