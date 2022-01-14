let headersList = 
	{
		"Accept": "*/*",
		"User-Agent": "Thunder Client (https://www.thunderclient.io)",
		"Authorization": "JWT " + localStorage.getItem("token")
	}
	
	let reqOptions = 
	{
		url: BASE_URL + `games/${id}`,
		method: "GET",
		headers: headersList,
	}
	
	return axios.request(reqOptions).then(function (response) 
	{
		return response.data
	})