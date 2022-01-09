import './ListofLists.css'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import importObject from "../api/my-games-list-api"

function ListsofLists(props)
{
	// states
	const [gamesLists, setGamesLists] = useState(0)

	// effects
	// useEffect("function")
	useEffect(() => {
		const getGamesList = async () => 
		{
			const data = importObject.fetchAllGamesLists()
			console.log("returned data", data)
			if (data)
			{
				setGamesLists(data)
			}
		}

		getGamesList()
	}, [])

	const renderGamesList = () => {
		let elems = gamesLists.map((gamesList) => {
			return	(
				<li>
					<Link to ={`/games-list/${gamesList.id}`}>{gamesList.name}</Link>
				</li>
			) 
		})
		return elems
	}

	return	( 
		<div className = "ListofLists">
			<p>HelloWorld</p>
			<ul>
				{renderGamesList()}
			</ul>
		</div>
	)
}

export default ListsofLists;