import React, { useState } from 'react'

import axios from 'axios'
const Home = () => {
	const [city, setCity] = useState('');
	const [loading, setLoading] = useState(false);
	const [weather, setWeather] = useState(null);

	const fetchData=async(e)=>{
		console.log(city)
		if(e.key==="Enter"){

			const response =await axios.get(`/api/getWeather?city=${city}`);
			console.log(response);
		}
	}

	const handleChange=(e)=>{
		setCity(e.target.value);
		console.log(city)
	}

  return (
	<div className='flex flex-col space-y-8'>
		<div className=' '>
		<div className='bg-dark-1 rounded-lg py-6 ring-1 ring-slate-600'>

<input 
type="text" 
name="" 
id="" 
placeholder='Search city'
className='w-2/3 bg-white rounded-lg px-4 py-2  outline-none  transition-all
duration-200
shadow-sm
hover:shadow'
onChange={handleChange}
onKeyDown={fetchData}
/>
		</div>
		</div>
		
		

		<div className='flex justify-center gap-20   w-full'>
			
		<div className='text-white p-4 rounded-lg  w-1/2 bg-dark-1 ' >
		<ul className='flex  flex-col space-y-2 bg-dark-1'>
			<li className='bg-dark-1 rounded-lg  p-4  ring-1 ring-slate-600'>Humidity</li>
			<li className='bg-dark-1 rounded-lg p-4 ring-1 ring-slate-600'>Humidity</li>
			<li className='bg-dark-1 rounded-lg  p-4 ring-1 ring-slate-600'>Humidity</li>
			<li className='bg-dark-1 rounded-lg p-4 ring-1 ring-slate-600'>Humidity</li>
		</ul>
		
	</div>

	
		<div className=' flex flex-col  bg-dark-1 p-4 text-white w-1/2 rounded-lg space-y-8 '>

			<div className='flex gap-2 items-center'>
			<span className=' font-semibold'>	Gurugram,</span>
		    <span className='font-light text-xs'>Haryana</span>
			</div>

			<p className='font-extrabold text-6xl'>25 C</p>

			<div className='flex  space-x-4 items-center justify-center font-mono'>
				<span >
					<p>Humidity</p>
					<p>270</p>
					</span>

				<span >
				<p>Wind Speed</p>
					<p>270</p>
				</span>
				<span >
				<p>Haze</p>
					<p>270</p>
					</span>
				
			</div>

		</div>

	</div>


		</div>

  )
}

export default Home