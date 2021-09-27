import './App.css';
import React,{useState} from 'react';

const api={
  key:"b073d84a2ec2e05edbf1c9e80ec04a77",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState(' ');
  const [weather, setWeather] = useState({});

  const search=evt=>{
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res=>res.json())
      .then(result=>{ 
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }
  
  const dateBuilder=(d) => {
    let months=["Janurary","February","March","April","May","June","July","August","September","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  // <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app cold') : 'app cold'

  return (
    <div className={(typeof weather.main !== "undefined") ? (weather.weather[0].description==="mist")? 'app mist':(weather.weather[0].description==='haze')?'app haze':(weather.weather[0].description==='scattered clouds')?'app scatteredclouds':(weather.weather[0].description==='broken clouds')?'app brokenclouds':(weather.weather[0].description==='few clouds')? 'app fewclouds':(weather.weather[0].description==='thunderstorm')? 'app thunderstrom':(weather.weather[0].description==='light rain')? 'app lightrain':(weather.weather[0].description==='overcast clouds')? 'app overcastclouds':'app warm': 'app cold'
    }>
     <main>
     <div className="search-box">
       <input type="text"
         className="search-bar"
         placeholder="Weather at your City..."
         onChange={e=>setQuery(e.target.value)}
         value={query}
         onKeyPress={search}
       />
     </div>
       {(typeof weather.main !== "undefined") ? (
       <div>
         <div className="location-box">
         <div className="location">{weather.name},{weather.sys.country}</div>
         <div className="date">{dateBuilder(new Date())}</div>
         <div className="date">Latitude : {weather.coord.lat}  Longitude : {weather.coord.lon} </div>
       </div>
       <div className="weather-box">
         <div className="temp">{Math.round(weather.main.temp)}°C</div>
         <div className="feelslike">Feels Like : {Math.round(weather.main.feels_like)}°C</div>
         <div className="weather">{weather.weather[0].description}</div>
       </div>
       </div>
       ):(" ")}
     </main>
    </div>
  );
}

export default App;
