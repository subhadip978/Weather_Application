import express from 'express';

import dotenv from 'dotenv';
import axios from 'axios'
import cors from 'cors'
import redis from 'redis'
dotenv.config();
const port = process.env.PORT || 3000;
const app = express()


app.use(cors({
	origin: 'http://localhost:4000',
	credentials: true
}))
const redisClient = redis.createClient();

redisClient.on("connect", () => console.log("Redis connected"))
await redisClient.connect();

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

app.get("/api/getweather", async (req, res) => {
	const city = req.query.city;
	if (!city) return res.status(400).json({ err: 'city is required' })

	try {
		const cacheKey = `weather_${city.toLowerCase()}`;
		const cachedData = await redisClient.get(cacheKey);
		
		if (cachedData) {
			
			return res
				.status(200)
				.send({
					message: 'Retrieved successfully',
					weatherInfo: JSON.parse(cachedData)
				})
		}
		const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&limit=5`)


		const weatherData = {
			city: response.data.name,
			country: response.data.sys.country,
			temperature: response.data.main.temp,
			description: response.data.weather[0].description,
			pressure: response.data.main.pressure,
			humidity: response.data.main.humidity,
			windSpeed: response.data.wind.speed,
		}



		redisClient.set(cacheKey, JSON.stringify(weatherData))
			.then(() => console.log("Data stored in Redis"))
			.catch((err) => console.error("Redis set error:", err));


		res.status(200).json({ weatherInfo: weatherData });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Failed to fetch weather data:', error });

	}

})





app.get("/api/forecastweather", async (req, res) => {
	const city = req.query.city;
	const cacheKey=`${city.toLowerCase()}_forecast` ;
	const cacheData = await redisClient.get(cacheKey);

	if (cache) {
		return res.status(200).json(cacheData);

	}

	const response = await axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&limit=5`);

	await redisClient.set(cacheKey,response);
	res.status(200).json(response.data);

})


app.listen(port, () => {
	console.log(`server is running at ${port}`)
})


