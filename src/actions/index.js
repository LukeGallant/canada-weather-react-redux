import axios from 'axios';

const API_KEY = "195e6b71fe7d0d704b4f8ccdefff79f9";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},can`;
	const request = axios.get(url);
	console.log('Request:', request)
	if(request == null){
		console.log("nully")
	}
	return{
		type: FETCH_WEATHER,
		payload: request
	};
}