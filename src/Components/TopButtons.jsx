import React from 'react'

function TopButtons({ setQuery }) {

  const cities = [
    { id:1,title: 'Bengaluru'},
    { id:2, title: 'Mumbai'},
    { id:3, title: 'Hyderabad'},
    { id:4, title: 'Chennai'},
    { id:5, title: 'Delhi'}
  ]
  return (
    <div className='flex items-center justify-around my-2'>
      {cities.map((city) => (
        <button key = {city.id}
         className=' text-white text-lg font-medium mt-2'
         onClick={() => setQuery({q: city.title})}
         >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;