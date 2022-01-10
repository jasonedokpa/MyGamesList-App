import './Home.css'
import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import importObject from "../api/my-games-list-api"
import NavBarComponent from "../components/NavBar"

function Home(props)
{
	// states
	const [allGames, setAllGames] = useState([])

	// effects
	// useEffect("function")
	useEffect(() => {
		const getAllGames = async () => 
		{
			const data = await importObject.fetchAllGames()
			if (data)
				setAllGames(data)
		}

		getAllGames()
	}, [])

	const renderAllGames = () => {
		console.log(allGames)
		let elems = allGames.map((game, index) => {
			return	(
				<li key={index}>
					<div><img src={game.image_url}></img></div>
					<div><Link to ={`/game/${game.id}`}>{game.title}</Link></div>
				</li>
			) 
		})
		return elems
	}

	return	(
		<Fragment>
			<NavBarComponent></NavBarComponent>
			<div className = "ListofLists">
				<ul>
					{renderAllGames()}
				</ul>
			</div>
		</Fragment>
	)
}

export default Home;