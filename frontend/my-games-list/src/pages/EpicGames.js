import { getGames } from "epic-free-games";
import { Link } from "react-router-dom"
import { Fragment, useEffect, useState } from "react"
import importObject from "../api/EpicGames-api"
import NavBarComponent from "../components/NavBar";
import './EpicGames.css'

function EpicGames(props)
{

	const [freeGames, setFreeGames] = useState([])

	useEffect((async () => {
		const apiResponse = await importObject.fetchFreeEpicGames()
		setFreeGames(apiResponse.data.Catalog.searchStore.elements)
	}), [])

	const renderFreeGames = () =>
	{
		return freeGames.map((game, index) => {
			return (
				<Fragment key = {index}>
					<div className="row">
						<div className="left-column">
							<a href={("https://www.epicgames.com/store/en-US/p/" + game.productSlug).replace("home", "")}>{game.title}</a>
						</div>
						<div className="right-column">
							<p>Date available: {game.effectiveDate.slice(0, 10)}</p>
						</div>
					</div>
					<br></br>
				</Fragment>
			)
		})
	}


	return (
		<Fragment>
			<NavBarComponent></NavBarComponent>
			<h1>Free Epic Games of the Week</h1>
			<br></br><br></br>
			{renderFreeGames()}
		</Fragment>
	)
}

export default EpicGames
