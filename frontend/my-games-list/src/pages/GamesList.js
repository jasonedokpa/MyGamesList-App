import './GamesList.css'
import {useState, useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"
import importObject from '../api/my-games-list-api'

function GamesList(props)
{
	const games_list_id = useParams().gameID

	// states
	const [gamesList, setGamesLists] = useState([])

	// effects
	// useEffect("function")
	useEffect(() => {
		const getGamesLists = async () => 
		{
			const data = await importObject.fetchAllGamesLists()
			if (data)
				setGamesLists(data)
		}
		getGamesLists()
	}, [])

	const renderAllGamesLists = () => { 
		let elems = gamesList.map((game, index) =>
		{
			
	
		})
		return elems
	}

	console.log("helloWolrd",gamesList)
	return (
		<Fragment>
			<p>{gamesList.name}</p>
		</Fragment>
	)
}

export default GamesList;