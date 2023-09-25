import './App.css';
import React, { useEffect, useState } from 'react';
import TopButtons from './Components/TopButtons';
import Inputs from './Components/input';
import TimeAndLaoc from './Components/TimeAndLaoc';
import TemparatureAndDetails from './Components/TemparatureAndDetails';
import Forecast from './Components/Forecast';
import getFormattedWeatherData from './Services/WeatherService';

function App() 
{

  const [query, setQuery] = useState({q: 'Bengaluru'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)



  

  useEffect(() => {
    const fetchWeather = async () => {
        await getFormattedWeatherData({ ...query, units })
        .then((data) => {
          setWeather(data);
        });
        
      };

    fetchWeather();
  }, [query, units]);



  const formatBackground = () => {
    if(!weather) return 'from-cyan-700 to-blue-700'
    const threshold = units === 'metric' ? 20:60
    if(weather.temp <= threshold) return 'from-cyan-700 to-blue-700'
    return 'from-cyan-700 to-blue-700'
  }


  return (
    
      <div 
      className={`mx-auto rounded-xl max-w-screen-sm px-20 bg-gradient-to-br from-cyan-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
        {weather && 
        <div>
        <TimeAndLaoc  weather= {weather}/>
        <TemparatureAndDetails  weather= {weather}/>
        <Forecast title="Hourly Forecast" items={weather.hourly}/>
        <Forecast title="Daily Forecast" items={weather.daily}/>
        </div>}
        
      </div>
  );
}

export default App;
