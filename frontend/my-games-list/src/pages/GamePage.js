import './GamePage.css'
import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import importObject from "../api/my-games-list-api"
import NavBarComponent from '../components/NavBar'

function Game(props)
{
	const game_id = useParams().gameID

	// states
	const [game, setGame] = useState([])

	// effects
	// useEffect("function")
	useEffect(() => {
		const getGame = async () => 
		{
			const data = await importObject.fetchGame(game_id)
			if (data)
				setGame(data)
		}

		getGame()
	}, [])

	const renderGame = () => {
		return (
			<Fragment>
				<img src={game.image_url} alt="game-cover" />
				<p>{ game.title }</p>
				<p>{ game.developer} </p>
				<p>{ game.date_released} </p>
				<p>Review Score: { game.review_score} </p>
				<p>{ game.description} </p>
			</Fragment>
		)
	}

	return	( 
		<Fragment>
			<NavBarComponent></NavBarComponent>
			<div className = "ListofLists">
				<ul>
					{renderGame()}
				</ul>
			</div>
		</Fragment>
	)
}

export default Game;