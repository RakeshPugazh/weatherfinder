const form = document.querySelector('form');
const card = document.querySelector('.card');
const cityName = document.querySelector(".name");
const weathercondition = document.querySelector(".weather");
const temp = document.querySelector(".temp");
const time = document.querySelector(".time");
const icon = document.querySelector(".icon img");



const updateUI = (data) =>{

	//const cityDetails = data.cityDetails;
	//const weather = data.weather;

  
 
    const { cityDetails , weather } = data ;

	//console.log(cityDetails.EnglishName);
	console.log(weather);
	console.log(weather.WeatherText);

   cityName.innerHTML = cityDetails.EnglishName;
   weathercondition.innerHTML = weather.WeatherText;
   temp.innerHTML = weather.Temperature.Metric.Value;

   //Update Image

   if(weather.IsDayTime)
   {
   	 time.src ="images/day.svg" ;
   }
   else {
   	 time.src = "images/night.svg" ;
   }
   
   //Update Icon
   console.log(weather.WeatherIcon);
    const wIcon = "icons/" +  weather.WeatherIcon + ".svg"
    console.log(wIcon);
    icon.src = wIcon ;

  
    if(card.classList.contains("d-none")){
     card.classList.remove("d-none");	
    }
    



  };



const updateCity = async (city) =>{
 
  //console.log(city);
  const cityDetails = await getCity(city);
  const weather = await  getWeather(cityDetails.Key);

 return{
    cityDetails,
    weather,
 }; 


};


form.addEventListener('submit', e =>{
	
	e.preventDefault();

	//get city value
	const city = form.city.value.trim();
	form.reset();

	//Update the UI 
	updateCity(city)
	.then(data =>{
		updateUI(data);
	})
	.catch(err => console.log(err));
	


});