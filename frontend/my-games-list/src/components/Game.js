import './Game.css'
import { useParams, Link } from "react-router-dom"
import { Container, Col, Row, Column, Button, Alert, Form, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import importObject from "../api/IGDB-api"

const postGame = (game_id, image_url) =>
{
	var gameDataReference = {}
	
	const getGameInformation = async (gameDataParam) =>
	{
		const gameInformationObject = await importObject.fetchIGDBGame(game_id)
		gameDataParam.info = gameInformationObject[0]

		gameInformationObject.platform = "Sony"
	}
	
	(async () => 
	{
		await getGameInformation(gameDataReference)
		console.log(gameDataReference.info)

		let exportObject = 
		{
			"title": gameDataReference.info.name,
			"description": gameDataReference.info.summary,
			"platforms": "Nintendo 64",
			"image_url": image_url,
			"url": gameDataReference.info.url,
			"developer": "Nintendo",
			"review_score": Math.round(gameDataReference.info.rating),
			"date_released": "1996-07-23"
		}

		importObject.postDataBaseGame(exportObject)
	})()

}

function GameComponent(props)
{
	return (
		<div>
			{props.search && <button onClick={() => postGame(props.id, props.image_url)}>Add Game</button>}
			<div><Link to ={`/game/${props.id}`}>{props.title}</Link></div>
			<div><img src={props.image_url} alt={"game_cover"}></img></div>
		</div>
	)
}

export default GameComponent;