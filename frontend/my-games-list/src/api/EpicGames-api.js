import axios from "axios"
const BASE_URL = "http://localhost:8020/proxy/"

// lcp --proxyUrl  https://store-site-backend-static.ak.epicgames.com/ --port 8020

const fetchFreeEpicGames = () =>
{
	return axios({
		url: BASE_URL + "freeGamesPromotions?country=US",
		method: 'GET',
		headers: 
		{
			'Accept': 'application/json',
		},
		data: ``
	}).then(response => {
			//console.log(response.data);
			return response.data
		}).catch(err => {
			console.error(err);
			})
}

export default 
{
	fetchFreeEpicGames
}
