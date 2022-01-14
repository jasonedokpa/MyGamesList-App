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
		console.log(response.data);
	})