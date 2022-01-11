import { useState, useEffect } from "react";
import NavBarComponent from "../components/NavBar";
import importObject from "../api/IGDB-api"
import GameComponent from "../components/Game";

export default function Search()
{
	const [query, setQuery] = useState("")
	const [searchResults, setSearchResults] = useState([])
	const [gameCover, setGameCover] = useState([])

	useEffect(() =>
	{
		const getGameData = async () =>
		{	
			const data = await importObject.fetchIGDBGames(query)
			setSearchResults(data)
		}
			
		getGameData()

		let cover_urls = []

		for (var i = 0; i < 10; i++)
		{
			const getGameCover = async() =>
			{
				let data = await importObject.fetchIGDBCovers(searchResults[i].cover)

				console.log("image data", data)
				
				cover_urls.push("https://images.igdb.com/igdb/image/upload/t_cover_big/" + data[0].image_id + ".png")
			}
			getGameCover()
		}
		
		console.log("cover_urls", cover_urls)
		setGameCover(cover_urls)
	
	}, [query]
	)

	const renderSearchResults = () => {
		let elems = searchResults.map((game, index) => {
			return	<GameComponent key={index} id={game.id} title={game.name} image_url={ gameCover[index] } search={true}/>
		})
		return elems
	}

	return (
		<div>
			<NavBarComponent/>
			<label>Search</label>
			<input type="text" onChange={e => setQuery(e.target.value)}></input>
			<div>
				{renderSearchResults()}
			</div>
		</div>
	)
}
