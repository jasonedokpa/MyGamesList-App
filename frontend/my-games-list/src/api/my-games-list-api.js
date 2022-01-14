import axios from "axios";
const BASE_URL = "http://localhost:8000/api/"

const checkExpiration = (error) =>
{
	if (error.response.status === 401)
	{
		window.location.replace("http://localhost:3000/login")
		alert("We have safely logged you out")	
	}
}

const fetchGame = (id) =>
{
	return axios.request({
		url: BASE_URL + `games/${id}`,
		method: "GET",
		headers: 
		{
			"Accept": "*/*",
			"Authorization": "JWT " + localStorage.getItem("token")
		},
	}).then(response => {
		//console.log(response.data)
		return response.data
		}).catch((err) => {
			console.error(err)
	 		checkExpiration(err)
  			})
}

const fetchAllGames = () =>
{	
	return axios.request({
		url: BASE_URL + "games/",
		method: "GET",
		headers: 
		{
			"Accept": "*/*",
			"Authorization": "JWT " + localStorage.getItem("token")
		},
	}).then(response => {
		//console.log(response.data)
		return response.data
		}).catch((err) => {
			console.error(err)
			checkExpiration(err)
			})
}

const fetchGamesList = (id) =>
{
	return axios.request({
		url: BASE_URL + `games-list/${id}`,
		method: "GET",
		headers: 
		{
			"Accept": "*/*",
			"Authorization": "JWT " + localStorage.getItem("token")
		},
	}).then(response => {
			//console.log(response.data)
			return response.data
		}).catch((err) => {
				console.error(err)
				checkExpiration(err)
  			})
}

const fetchAllGamesLists = () =>
{
	return axios.request({
		url: BASE_URL + "games-list/",
		method: "GET",
		headers: 
		{
			"Accept": "*/*",
			"Authorization": "JWT " + localStorage.getItem("token")
		},
	}).then(response => {
			//console.log(response.data)
			return response.data
		}).catch((err) => {
				console.error(err)
	 			checkExpiration(err)
  			})
}

const deleteGame = (game_id) =>
{
	axios.request({
		url: "http://127.0.0.1:8000/api/games/" + game_id,
		method: "DELETE",
		headers: {
			"Accept": "*/*",
			"Authorization": "JWT " + localStorage.getItem("token") 
		},
	}).then(response =>
		{
			//console.log(response.data)
			window.location.replace("http://localhost:3000/")
		}).catch((err) => 
			{
				console.error(err)
				checkExpiration(err)
  			})
}

const getCredentials = (username, password) =>
{
	return axios({
		method: 'post',
		url: 'http://127.0.0.1:8000/api/auth/',
		headers: 
		{ 
		  'Accept': '*/*'
		},
		data : 
		{
		  "username": username,
		  "password": password
		}
	}).then(response => {
		//console.log(response.data)
		return response.data
		}).catch(function (err) {
			console.error(err);
			})
}

export default
{
	fetchGame,
	fetchAllGames,
	fetchGamesList,
	fetchAllGamesLists,
	deleteGame,
	getCredentials
}
