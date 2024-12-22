import React, { useState } from 'react'

import axios from 'axios'








const Home = () => {
	const [city, setCity] = useState('');
	const [loading, setLoading] = useState(false);
	const [weatherDetails, setWeatherDetails] = useState();
	const [forecastData, setForecastData] = useState();

	const fetchData = async (e) => {
		if (e.key === "Enter") {

			const { data } = await axios.get(`/api/getweather?city=${city}`);
			console.log(data.weatherInfo);
			setWeatherDetails(data.weatherInfo);
		}
	}

	const handleForeCast = async (e) => {
		if (e.key === "Enter") {
			const { data } = await axios.get(`/api/forecastweather?city=${city}`);
			console.log(data.list);
			setForecastData(data.list);

		}
	}

	const handleChange = (e) => {
		setCity(e.target.value);
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
						className='w-2/3 bg-white rounded-lg px-4 py-2  outline-none  transition-all duration-200 shadow-sm hover:shadow'
						onChange={handleChange}
						onKeyDown={(e) => {
							fetchData(e);
							handleForeCast(e)
						}}
					/>
				</div>
			</div>


			<div className='flex justify-center gap-20   w-full'>


				<div className='text-white p-4 rounded-lg  w-1/2 bg-dark-1 ' >
					<ul className='flex  flex-col space-y-2 bg-dark-1'>
						{forecastData?.length > 0 ? (forecastData.slice(0, 5).map((i) => {
							return (
								<li className='bg-dark-1 rounded-lg  p-4  ring-1 ring-slate-600'>

									<h1 className='font-bold'>{i.main.temp}&deg;C</h1>

									<span className='text-xs'>
										{i.dt_txt}
									</span>
								</li>

							)
						})) :
							(<h1 className='font-semibold text-lg'>

								Search to get forecast in your hand

							</h1>)
						}

					</ul>

				</div>



				<div className=' flex flex-col  bg-dark-1 p-4 text-white w-1/2 rounded-lg space-y-8 '>

					<div className='flex gap-2 items-center'>
						<span className=' font-semibold'>	{weatherDetails ? weatherDetails.city : '---'}</span>
						<span className='font-light text-xs'>{weatherDetails ? weatherDetails.country : "---"}</span>
					</div>

					<p className='font-extrabold text-6xl'>{weatherDetails ? weatherDetails.temperature : "---"}&deg;c</p>

					<div className='flex  space-x-4 items-center justify-center font-mono'>
						<span >
							<p>Humidity</p>
							<p>{weatherDetails ? weatherDetails.humidity : "---"}</p>
						</span>

						<span >
							<p>Wind Speed</p>
							<p>{weatherDetails ? weatherDetails.windSpeed : "---"}</p>
						</span>
						<span >
							<p>{weatherDetails ? weatherDetails.description : "---"}</p>
						</span>

					</div>



				</div>

			</div>


		</div>

	)
}

export default Home