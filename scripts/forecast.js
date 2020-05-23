const apikey = 'ue8hpAwN27Hb9zbaBG4hSD0LXUVb9LO8' ;



const getWeather = async(Key)=>{

 const url = 'https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/currentconditions/v1/' + Key + '?apikey=' + apikey;
 
 const response =await fetch(url);

 const data = await response.json();
 //console.log(data);
  
 return data[0] ;
}




const getCity = async (city)=>{
 //const proxy = 'https://cors-anywhere.herokuapp.com/';
 const base = 'https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/search' ; 
 const query = '?apikey=' + apikey + '&q=' + city ;
   
  const url = base + query ;

  const response = await fetch(url);
  
  const data = await response.json() ;
  //console.log(data) ;
  return data[0] ;
  
};




 







