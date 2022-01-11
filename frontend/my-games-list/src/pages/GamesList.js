import './GamesList.css'
import {useState, useEffect, Fragment } from "react"
import { useParams, Link } from "react-router-dom"
import importObject from '../api/my-games-list-api'
import NavBarComponent from '../components/NavBar'
import GameComponent from '../components/Game'

function GamesList(props)
{
	const games_list_id = useParams().listID
	
	// states
	const [gamesList, setGamesList] = useState([])

	// effects
	// useEffect("function")
	//useEffect()

	useEffect(() => 
	{
		console.log("calledfirst")
		const getGamesLists = async () => 
		{
			const data = await importObject.fetchGamesList(games_list_id)

			
			
			if (data)
				{
				console.log("truest", data)
				setGamesList(data)
				console.log("fetafla", gamesList)
				}
			
		}
		getGamesLists()
	}, [])


	console.log("shess",gamesList)


	const listOfGames = gamesList.games

	const renderGamesList = () => {
		let elems = listOfGames?.map((game, index) => {
			return <GameComponent id={game.id} title={game.title} image_url={game.image_url}/>
		})
		return elems
	}
	
	return (
		<Fragment>
			<NavBarComponent isList={true}/>
			<div id="img-wrapper">{renderGamesList()}</div>
		</Fragment>
	)
}

export default GamesList;