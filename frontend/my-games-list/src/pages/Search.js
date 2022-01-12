import { useState, useEffect } from "react";
import NavBarComponent from "../components/NavBar";
import importObject from "../api/IGDB-api"
import GameComponent from "../components/Game";
import "./Search.css"

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
			let cover_urls = []
			for (var i = 0; i < 10; i++)
			{
				let coverData = await importObject.fetchIGDBCovers(data[i].cover)
		
				console.log("cover data", coverData)
				
				cover_urls.push("https://images.igdb.com/igdb/image/upload/t_cover_big/" + coverData[0].image_id + ".png")
			}
		
			console.log("cover_urls", cover_urls)
			setGameCover(cover_urls)
			setSearchResults(data)
		}
			
		getGameData()

	}, [query]
	)

	const renderSearchResults = () => {
		let elems = searchResults.map((game, index) => {
			return	<GameComponent url={game.url} key={index} id={game.id} title={game.name} image_url={ gameCover[index] } search={true}/>
		})
		return elems
	}

	const handleOnSubmit = (inputTextEvent) =>
	{
		console.log(inputTextEvent)
		inputTextEvent.preventDefault()
		setQuery()
	}

	return (
	

		<div >
			<NavBarComponent/>
			<form onSubmit={handleOnSubmit}>
				<label>
					Enter Game:
					<input type="text" name="name" />
				</label>
				<input type="submit" value="Search" />
				</form>
			<div id="img-wrapper">
				{renderSearchResults()}
			</div>
		</div>
	)
}
