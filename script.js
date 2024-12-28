const apikey = "d46e83574c1f494bf7e5b93004ab9cd6";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";//const apiurl = "https://api.openweathermap.org/data/2.5/weather?";


const weather_search = document.querySelector(".weather-icon input");//for selecting city name   //.weather-icon="div class" input type
const search_btn = document.querySelector(".weather-icon  button");//click button then change temp,humidity,windspeed 
const weatherImg = document.querySelector(".weather-image");//for changing image as per weather condition

const CurrentTime=document.getElementById("current-time");
const CurrentDate=document.getElementById("current-date");
//for current time :
const date=new Date();
CurrentTime.innerHTML=date.toLocaleTimeString();
// CurrentDate.innerHTML=date.toLocaleDateString();

CurrentDate.innerHTML=date.getDate()+":"+(date.getMonth()+1)+":"+date.getFullYear();;

setInterval(()=>{
	const date=new Date();
	CurrentTime.innerHTML=date.toLocaleTimeString();
},1000)

async function getData(city) {
	var url = (apiurl + '&q=' + city + '&appid=' + apikey); //this is the format
	console.log(url);

	let response = await fetch(url);
	var data = await response.json();
	console.log(data);

	document.querySelector(".weather-change-name").innerHTML =data.weather[0].main;
	document.querySelector(".temp").innerHTML = `${Number.parseInt(data.main.temp)}<span>°C</span>`;//change the temp to your city
	document.querySelector(".city").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${(data.name)}`;//change the locatin to your city
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";//change the humidity to your city
	document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";//changethe wind speed to your city

	

	// if (data.weather[0].main == "Clouds") {
	// 	weatherImg.src = weatherphoto['Clouds'];
	// }
	// else if (data.weather[0].main == "Clear") {
	// 	weatherImg.src = weatherphoto['Clear'];
	// }
	// else if (data.weather[0].main == "Rain") {
	// 	weatherImg.src = weatherphoto['Rain'];
	// }
	// else if (data.weather[0].main == "Strom") {
	// 	weatherImg.src = weatherphoto['Storm'];
	// }
	// else {
	weatherImg.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png"; // icon fetching from api openweather
	// }
}
//@2x.png =? // used here for size 2x,4x...

search_btn.addEventListener("click", () => {   //creating func  click button then change temp,humidity,windspeed  
	getData(weather_search.value);
})

