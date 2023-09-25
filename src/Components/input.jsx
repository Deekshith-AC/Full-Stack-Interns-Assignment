import React, { useState } from 'react'
import { UilSearchAlt, UilMapMarker } from '@iconscout/react-unicons'

function Inputs({setQuery, units, setUnits}) {

  const [city, setCity] = useState("");



  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };



  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };



  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if( units !== selectedUnit) setUnits(selectedUnit);
  }

  return (

    <div className='flex flex-row justify-center'>
        <div className='flex flex-row items-center justify-center space-x-4'>
            <input 
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type='text' placeholder='Search for city...' className='text-xl font-light p-1 w-full shadow-xl px-8 capitalize focus:outline-none placeholder:lowercase'></input>
            <button onClick={handleSearchClick} className="text-white cursor-pointer transition ease-out hover:scale-125">
              <UilSearchAlt size={35} />
            </button>
            <button onClick={handleLocationClick} className="text-white cursor-pointer transition ease-out hover:scale-125">
            <UilMapMarker size={35} />
            </button>
        </div>
        <div className='flex flex-row items-center justify-ceneter mx-4 '>
            <button 
            onClick={handleUnitsChange}
            name='metric' className='text-xl text-white font-medium transition ease-out hover:scale-125'>°C</button>
            <pre className='text-xl text-white mx-1'>/</pre>
            <button
            onClick={handleUnitsChange}
            name='imperial' className='text-xl text-white font-medium transition ease-out hover:scale-125'> °F</button>
        </div>
    </div>
  )
}

export default Inputs;