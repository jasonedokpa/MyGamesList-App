const tryCatchFetch = async (url, init = null ) =>
{
	try
	{
		const response = await fetch(url, init)
		if (response.ok)
		{
			return await response.json()
		}
		else
		{
			throw new Error(`bad response: ${response.status} ${response.statusText}`)
		}
	}

	catch (e)
	{
		console.error(e)
		return null
	}
}

const BASE_URL = "http://localhost:8000/api/"

const fetchAllGamesLists = async () =>
{
	const url = BASE_URL + "games-list/"
	return await tryCatchFetch(url)
}

export default
{
	tryCatchFetch,
	fetchAllGamesLists
}
