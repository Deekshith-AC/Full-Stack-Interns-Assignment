import React from 'react'
import {UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset} from "@iconscout/react-unicons"
import { formatToLocalTime, iconUrlFromCode } from '../Services/WeatherService';

function TemparatureAndDetails({weather: {details, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone}}) {
    return (
    <div>
        
        <p className='flex items-center justify-center py-2 text-xl text-cyan-300'>{details}</p>
        <div className="flex flex-col space-y-6 md:space-y-0  md:flex-row items-center justify-between text-white ">
            <svg className='h-20' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 120 120" id="weather">
            <defs>
                <linearGradient id="a" x1="60" x2="60" y1="-725.988" y2="-845.988" gradientTransform="matrix(1 0 0 -1 0 -725.988)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#1d6ff2"></stop>
                <stop offset="1" stopColor="#1ac8fc"></stop>
                </linearGradient>
                <linearGradient id="b" x1="-550.983" x2="-550.983" y1="-440.505" y2="-442.505" gradientTransform="matrix(21.5 0 0 -21.5 11884.645 -9443.866)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ffc700"></stop>
                <stop offset="1" stopColor="#ffea00"></stop>
                </linearGradient>
            </defs>
            <path fill="url(#a)" d="M26,0H94a25.94821,25.94821,0,0,1,26,26V94a25.94821,25.94821,0,0,1-26,26H26A25.94821,25.94821,0,0,1,0,94V26A25.94821,25.94821,0,0,1,26,0Z"></path>
            <circle cx="38.5" cy="48.5" r="21.5" fill="url(#b)"></circle>
            <path fill="#fff" fillRule="evenodd" style={{ isolation: 'isolate', fillOpacity: 0.88 }} d="M43,90a16.51916,16.51916,0,0,1-4-32.4,21.00077,21.00077,0,0,1,40.9-6.3,21.8614,21.8614,0,0,1,3.6-.3,19.5,19.5,0,0,1,0,39H43Z"></path>
            </svg>

        
                    <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
            <div className="flex flex-col gap-2">

                <div className="flex font-light text-sm items-center justify-left">
                    <UilTemperature size = {18} className = "mr-1"/>
                    <pre className="flex text-base items-center justify-left font-Popping">Real Feel: </pre> 
                    <span className='font-medium '>{`${feels_like.toFixed()}°`}</span>
                </div>

                <div className="flex font-light text-sm items-center justify-left">
                    <UilTear size = {18} className = "mr-1"/>
                    <pre  className="flex text-base items-center justify-left">Humidity: </pre> 
                    <span className='font-medium '>{`${humidity.toFixed()}%`}</span>
                </div>

                <div className="flex font-light text-sm items-center justify-left">
                    <UilWind size = {18} className = "mr-1"/>
                    <pre className="flex text-base items-center justify-left">Wind: </pre> 
                    <span className='font-medium  whitespace-nowrap'>{`${speed.toFixed()} Km/Hr`}</span>
                </div>
            </div>
        </div>

        <div className="flex flex-row items-center justify-center space-x-1 text-white text-sm py-1 mt-6">
            <UilSun/>
            <p className="font-medium">
                Rise: <span className="ml-0.5 font-medium">{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
            </p>
            <p className="font-light">|</p>

            <UilSunset/>
            <p className="font-medium">
                Set: <span className="ml-1 font-medium">{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
            </p>
            <p className="font-light">|</p>

            <UilArrowUp/>
            <p className="font-medium">
                High: <span className="ml-1 font-medium">{`${temp_max.toFixed()}°`}</span>
            </p>
            <p className=" font-light">|</p>

            <UilArrowDown/>
            <p className="font-medium">
                Low: <span className="ml-1 font-medium">{`${temp_min.toFixed()}°`}</span>
            </p>

        </div>
    </div>
    
  )
}

export default TemparatureAndDetails;