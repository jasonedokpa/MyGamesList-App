import axios from "axios"
const BASE_URL = "http://localhost:8010/proxy/"

//api_url = https://api.igdb.com/v4/games
// lcp --proxyUrl https://api.igdb.com

const checkExpiration = (error) =>
{
	if (error.response.status === 401)
	{
		window.location.replace("http://localhost:3000/login")
		alert("We have safely logged you out!")	
	}
}

const fetchIGDBGames = (search_term) =>
{
	return axios({
		url: BASE_URL + "v4/games",
		method: 'POST',
		headers: 
		{
			'Accept': 'application/json',
			'Client-ID': '5wa2hmsikneaigvge9sd30pg4xpx82',
			'Authorization': 'Bearer dliikjkxi90xdnlc4tvfiy2zzwurn8'
		},
		data: `fields *; search "` + search_term + `";`
	}).then(response => {
			//console.log(response.data);
			return response.data
		}).catch(err => {
			console.error(err);
			})
}

const fetchIGDBGame = ( game_id ) =>
{
	return axios({
		url: BASE_URL + "v4/games",
		method: 'POST',
		headers: 
		{
			'Accept': 'application/json',
			'Client-ID': '5wa2hmsikneaigvge9sd30pg4xpx82',
			'Authorization': 'Bearer dliikjkxi90xdnlc4tvfiy2zzwurn8'
		},
		data: `fields *; where id = ` + game_id + `;`
	}).then(response => {
			return response.data
		}).catch(err => {
			console.error(err);
			})
}

const fetchIGDBCovers = ( cover_id ) =>
{
	return axios({
		url: BASE_URL + "v4/covers",
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Client-ID': '5wa2hmsikneaigvge9sd30pg4xpx82',
			'Authorization': 'Bearer dliikjkxi90xdnlc4tvfiy2zzwurn8'
		},
		data: `fields *; where id = ` + cover_id + `;`
	}).then(response => {
			return response.data
		}).catch(err => {
			console.error(err);
			return err
			})
}

const fetchIGDBCompany = (company_id) =>
{
	return axios({
		url: BASE_URL + "v4/involved_companies",
		method: 'POST',
		headers: 
		{
			'Accept': 'application/json',
			'Client-ID': '5wa2hmsikneaigvge9sd30pg4xpx82',
			'Authorization': 'Bearer dliikjkxi90xdnlc4tvfiy2zzwurn8'
		},
		data: `fields *; where id = ` + company_id + `;`
	}).then(response => {
			return response.data
		}).catch(err => {
			console.error(err);
			return err
			})
}

const postDataBaseGame = (dataFields) =>
{
	axios({
		method: 'POST',
		url: 'http://localhost:8000/api/games/',
		headers: 
		{ 
			'Content-Type': 'application/json',
			"Authorization": "JWT " + localStorage.getItem("token")
		},
		data : JSON.stringify(dataFields)
	}).then(response => {
		}).catch(error => {
			console.log(error);
			checkExpiration(error)
			});

}

export default
{
	fetchIGDBGames,
	fetchIGDBGame,
	fetchIGDBCovers,
	fetchIGDBCompany,
	postDataBaseGame,
}
