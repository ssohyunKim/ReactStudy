import axios from 'axios';

const API_KEY = '504a95e00d073b0e8da233b9a369d69a';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
				//'https://samples.openweathermap.org/data/2.5/forecast?appid='+API_KEY;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);


	return {
		type: FETCH_WEATHER,
		payload: request
	};

}