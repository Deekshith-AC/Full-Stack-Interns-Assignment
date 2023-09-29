import React from 'react'
import { formatToLocalTime } from '../Services/WeatherService'

function TimeAndLaoc( {weather: {dt, timezone, name, country}}) {
    return (
        <div className='flex flex-wrap justify-center'>
            <div className='flex items-center justify-center my-3 '>
                <p className="text-white text-l flex-grow-1 font-light ">
                    {formatToLocalTime(dt, timezone)}
                </p>
            </div>
            <div className="flex items-center justify-center">
                <p className='text-white text-3xl font-medium'>
                    {`${name}, ${country}`}
                </p>
            </div>
        </div>

    )
}

export default TimeAndLaoc