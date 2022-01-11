import axios from "axios"

const fetchIGDBGames = ( search_term ) =>
{
	//api_url = https://api.igdb.com/v4/games

	return axios({
		url: "http://localhost:8010/proxy/v4/games",
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Client-ID': '5wa2hmsikneaigvge9sd30pg4xpx82',
			'Authorization': 'Bearer dliikjkxi90xdnlc4tvfiy2zzwurn8'
		},
		data: `fields *; search "` + search_term + `";`
	  })
		.then(response => {
			//console.log(response.data);
			return response.data
		})
		.catch(err => {
			//console.error(err);
			return err
		})
}

const fetchIGDBCovers = ( cover_id ) =>
{
	//api_url = https://api.igdb.com/v4/covers

	return axios({
		url: "http://localhost:8010/proxy/v4/covers",
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Client-ID': '5wa2hmsikneaigvge9sd30pg4xpx82',
			'Authorization': 'Bearer dliikjkxi90xdnlc4tvfiy2zzwurn8'
		},
		data: `fields *; where id = ` + cover_id + `;`
	  })
		.then(response => {
			//console.log("response", response.data);
			return response.data
		})
		.catch(err => {
			//console.error(err);
			return err
		})
}

export default
{
	fetchIGDBGames,
	fetchIGDBCovers
}
