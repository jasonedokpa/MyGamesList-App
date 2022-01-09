import './ListofLists.css'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import importObject from "../api/my-games-list-api"

function ListsofLists(props)
{
	// states
	const [gamesLists, setGamesLists] = useState([0,1])

	// effects
	// useEffect("function")
	useEffect(() => {
		const getGamesList = async () => 
		{
			const data = await importObject.fetchAllGamesLists()
			if (data)
				setGamesLists(data)
		}

		getGamesList()
	}, [])

	const renderGamesLists = () => {
		let elems = gamesLists.map((gamesList, index) => {
			return	(
				<li key={index}>
					<Link to ={`/games-list/${gamesList.id}`}>{gamesList.name}</Link>
				</li>
			) 
		})
		return elems
	}

	return	( 
		<div className = "ListofLists">
			<h2>Choose A List</h2>
			{renderGamesLists()}
		</div>
	)
}

export default ListsofLists;