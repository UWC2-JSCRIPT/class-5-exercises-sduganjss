// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const headerWeather = document.getElementById('weather-head');

headerWeather.innerText = "February 10 Weather Forecast, Seattle";


// Change the styling of every element with class "sun" to set the color to "orange"

const sunClass = document.querySelectorAll('li.sun');

sunClass.forEach((el) => el.style.color = 'orange');


// Change the class of the second <li> from to "sun" to "cloudy"

sunClass[1].className = 'cloudy';
