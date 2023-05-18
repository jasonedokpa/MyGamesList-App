import './Game.css'
import { useParams, Link } from "react-router-dom"
import { Container, Col, Row, Column, Button, Alert, Form, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import importObject from "../api/IGDB-api"

const postGame = (game_id, image_url) =>
{
	var gameDataReference = {}

	const dateConverted = (unixTimeStamp) => 
	{
		// convert unix timestamp to milliseconds
		var ts_ms = unixTimeStamp * 1000;

		// initialize new Date object
		var date_ob = new Date(ts_ms);

		// year as 4 digits (YYYY)
		var year = date_ob.getFullYear();

		// month as 2 digits (MM)
		var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

		// date as 2 digits (DD)
		var date = ("0" + date_ob.getDate()).slice(-2);

		// date as YYYY-MM-DD format
		return year + "-" + month + "-" + date
	}

	
	const getGameInformation = async (gameDataParam) =>
	{
		const gameInformationObject = await importObject.fetchIGDBGame(game_id)



		gameDataParam.info = gameInformationObject[0]
	
		if (!gameDataParam.info.rating)
			gameDataParam.info.rating = 0

		if (gameDataParam.info.first_release_date)
			gameDataParam.info.first_release_date = dateConverted(gameDataParam.info.first_release_date)
		else
			gameDataParam.info.first_release_date = "2000-01-01"
	}
	
	(async () => 
	{
		await getGameInformation(gameDataReference)

		let exportObject = 
		{
			"user": localStorage.getItem("user_id"),
			"title": gameDataReference.info.name,
			"description": gameDataReference.info.summary,
			"platforms": "Nintendo 64",
			"image_url": image_url,
			"url": gameDataReference.info.url,
			"developer": "Default",
			"review_score": Math.round(gameDataReference.info.rating),
			"date_released": gameDataReference.info.first_release_date
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