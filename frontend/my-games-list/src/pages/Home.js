import './Home.css'
import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import importObject from "../api/my-games-list-api"
import NavBarComponent from "../components/NavBar"
import GameComponent from '../components/Game'

function Home(props)
{
	// states
	const [allGames, setAllGames] = useState([])

	// effects
	// useEffect("function")
	useEffect(() => 
	{
		const getAllGames = async () => 
		{
			const data = await importObject.fetchAllGames()
			if (data)
				setAllGames(data)
		}

		getAllGames()
	}, [])

	const renderAllGames = () => {
		let elems = allGames.map((game, index) => {
			return	<GameComponent id={game.id} title={game.title} image_url={game.image_url}/>
		})
		return elems
	}

	return	(
		<Fragment>
		
			<NavBarComponent></NavBarComponent>
			<div id="img-wrapper" className = "ListofLists">
				{renderAllGames()}
			</div>
		</Fragment>
	)
}

export default Home;