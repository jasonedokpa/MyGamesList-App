import axios from "axios";
const BASE_URL = "http://localhost:8000/api/"

const checkExpiration = (error) =>
{
	if (error.response.status === 401)
		window.location.replace("http://localhost:3000/login")
	alert("We have safely logged you out")	
}

const fetchAllGames = async (id) =>
{
	let headersList = 
	{
		"Accept": "*/*",
		"User-Agent": "Thunder Client (https://www.thunderclient.io)",
		"Authorization": "JWT " + localStorage.getItem("token")
	}
	   
	   let reqOptions = {
		 url: BASE_URL + "games/",
		 method: "GET",
		 headers: headersList,
	   }
	   
	   return axios.request(reqOptions).then(function (response) 
	   	{
			return response.data
	   	}).catch((error) => 
	   	{
			checkExpiration(error)
	 	})
}

const fetchAllGamesLists = async () =>
{
	let headersList = {
		"Accept": "*/*",
		"User-Agent": "Thunder Client (https://www.thunderclient.io)",
		"Authorization": "JWT " + localStorage.getItem("token")
	}
	
	let reqOptions = {
		url: BASE_URL + "games-list/",
		method: "GET",
		headers: headersList,
	}
	
	return axios.request(reqOptions).then(function (response) 
	{
		return response.data
	}).catch((error) => 
	{
	 checkExpiration(error)
  	})
}

const deleteGame = (game_id) =>
{
	let headersList = 
	{
		"Accept": "*/*",
		"User-Agent": "Thunder Client (https://www.thunderclient.io)",
		"Authorization": "JWT " + localStorage.getItem("token") 
	}

	let reqOptions = 
	{
		url: "http://127.0.0.1:8000/api/games/" + game_id,
		method: "DELETE",
		headers: headersList,
	}

	axios.request(reqOptions).then(function (response) 
	{
		console.log(response.data)
	}).catch((error) => 
	{
	 checkExpiration(error)
  	})

}

const fetchGamesList = async (id) =>
{
	let headersList = {
		"Accept": "*/*",
		"User-Agent": "Thunder Client (https://www.thunderclient.io)",
		"Authorization": "JWT " + localStorage.getItem("token")
	}
	
	let reqOptions = {
		url: BASE_URL + `games-list/${id}`,
		method: "GET",
		headers: headersList,
	}
	
	return axios.request(reqOptions).then(function (response) 
	{
		return response.data
	}).catch((error) => 
	{
	 checkExpiration(error)
  	})
}

const fetchGame = async (id) =>
{
	let headersList = {
		"Accept": "*/*",
		"User-Agent": "Thunder Client (https://www.thunderclient.io)",
		"Authorization": "JWT " + localStorage.getItem("token")
	}
	
	let reqOptions = {
		url: BASE_URL + `games/${id}`,
		method: "GET",
		headers: headersList,
	}
	
	return axios.request(reqOptions).then(function (response) 
	{
		return response.data
	}).catch((error) => 
	{
	 checkExpiration(error)
  	})
}


const getCredentials = (username, password) =>
{
	var data = 
	{
	  "username": username,
	  "password": password
	}
	
	var config = {
	  method: 'post',
	  url: 'http://127.0.0.1:8000/api/auth/',
	  headers: { 
		'Accept': '*/*'
	  },
	  data : data
	};
	
	return axios(config)
	.then(function (response)
	{
		return response.data
	})
	.catch(function (error) {
	  //console.log(error);
	  return error
	}).catch((error) => 
	{
	 checkExpiration(error)
  	})
}

export default
{
	fetchAllGamesLists,
	fetchGamesList,
	fetchAllGames,
	fetchGame,
	deleteGame,
	getCredentials
}
