import './Game.css'
import { useParams, Link } from "react-router-dom"
import { Container, Col, Row, Column, Button, Alert, Form, Navbar, Nav, NavDropdown } from 'react-bootstrap'

function GameComponent(props)
{
	return (
		<div>
			<div><Link to ={`/game/${props.id}`}>{props.title}</Link></div>
			<div><img src={props.image_url} alt={"game_cover"}></img></div>
		</div>
	)
}

export default GameComponent;