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

const fetchIGDBGame = ( game_id ) =>
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
		data: `fields *; where id = ` + game_id + `;`
	  })
		.then(response => {
			//console.log(response.data);
			return response.data
		})
		.catch(err => {
			console.error(err);
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

const postDataBaseGame = ( dataFields ) =>
{
	var axios = require('axios');
	var data = JSON.stringify({
        "title": "Super Mario 65",
        "description": "The first three dimensional entry in the Mario franchise, Super Mario 64 follows Mario as he puts his broadened 3D movement arsenal to use in order to rescue Princess Peach from the clutches of his arch rival Bowser. Mario has to jump into worlds-within-paintings ornamenting the walls of Peach's castle, uncover secrets and hidden challenges and collect golden stars as reward for platforming trials.",
        "platforms": "Nintendo 64",
        "image_url": "https://images.igdb.com/igdb/image/upload/t_cover_big/co21mm.png",
        "url": "https://www.igdb.com/games/super-mario-64",
        "developer": "Nintendo",
        "review_score": 90,
        "date_released": "1996-07-23"
	});

	var data = JSON.stringify(dataFields)

	var config = 
	{
  	method: 'post',
  	url: 'http://localhost:8000/api/games/',
  	headers: { 
    'Content-Type': 'application/json'
  	},
  	data : data
	};

	axios(config)
	.then(function (response) {
	console.log(JSON.stringify(response.data));
	})
	.catch(function (error) {
	console.log(error);
	});

}

export default
{
	fetchIGDBGames,
	fetchIGDBGame,
	fetchIGDBCovers,
	postDataBaseGame
}
