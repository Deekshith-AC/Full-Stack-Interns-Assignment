import React from 'react';
import { iconUrlFromCode } from '../Services/WeatherService';

function Forecast({ title, items }) {
  return (
    <div>
      <div className="flex items-center justify-left mt-6">
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-1' />

      <div className="ml-2 flex justify-between items-center pb-5">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-white">
            <p className="font-white text-sm">
              {item.title}
            </p>
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;