const apikey = 'ue8hpAwN27Hb9zbaBG4hSD0LXUVb9LO8' ;



const getWeather = async(Key)=>{

 const url = 'http://dataservice.accuweather.com/currentconditions/v1/' + Key + '?apikey=' + apikey;
 
 const response =await fetch(url);

 const data = await response.json();
 //console.log(data);
  
 return data[0] ;
}




const getCity = async (city)=>{
 //const proxy = 'https://cors-anywhere.herokuapp.com/';
 const base = 'http://dataservice.accuweather.com/locations/v1/cities/search' ; 
 const query = '?apikey=' + apikey + '&q=' + city ;
   
  const url = base + query ;

  const response = await fetch(url);
  
  const data = await response.json() ;
  //console.log(data) ;
  return data[0] ;
  
};




 /*
 	getCity('chennai')
.then(data => {
	
     return getWeather(data.Key)
    })
  .then(data=>{
  	 const condition = data.Temperature.Metric.Value + 'C'
     console.log(condition);
  
})
 */







