import './ListofLists.css'
import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import importObject from "../api/my-games-list-api"
import NavBarComponent from '../components/NavBar'

function ListsofLists(props)
{
	// states
	const [allGamesLists, setAllGamesLists] = useState([])

	// effects
	// useEffect("function")
	useEffect(() => {
		const getAllGamesLists = async () => 
		{
			const data = await importObject.fetchAllGamesLists()
			if (data)
				setAllGamesLists(data)
		}

		getAllGamesLists()
	}, [])

	const renderAllGamesLists = () => {
		console.log(allGamesLists)
		let elems = allGamesLists.map((gamesList, index) => {
			return	(
				<li key={index}>
					<Link to ={`/games-list/${gamesList.id}`}>{gamesList.name}</Link>
				</li>
			) 
		})
		return elems
	}

	return	( 
		<Fragment>
			<NavBarComponent></NavBarComponent>
			<div className = "ListofLists">
				<h2>Choose A List</h2>
				<ul>
					{renderAllGamesLists()}
				</ul>
			</div>
		</Fragment>
	)
}

export default ListsofLists;