import './ListofLists.css'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import importObject from "../../"

function ListsofLists(props)
{
	// states
	const [gamesLists, setGamesLists] = useState([{id: 1, name: "blah"}, {id: 2, name: "donuts"}])

	// effects
	// useEffect("function")
	useEffect(() => {
		const getGamesList = async () => {
		
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