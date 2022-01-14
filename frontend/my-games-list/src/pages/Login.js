import './Login.css'
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import background from "../images/background-image.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row, Column, Button, Alert, Form } from 'react-bootstrap'
import importObject from "../api/my-games-list-api"

function Login(props)
{
	const attemptLogin = async (event) =>
	{
		event.preventDefault()

		const username = event.target[0].value
		const password = event.target[1].value

		console.log("username", username)
		console.log("password", password)

		const returnObject = await importObject.getCredentials(username, password)

		if (returnObject.token)
			{
				localStorage.setItem("token", returnObject.token)
				localStorage.setItem("user_id", returnObject.user["id"])
				window.location.replace("http://localhost:3000/")
			}
		else
			alert("wrong password")
	}

	return (
		<div className=''>
			<Container>
				<h1 className="showow-sm text-sucess mt-5 p-3 text-center rounded">My Games App Login</h1>
				<Row>
					<Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
						<Form onSubmit={attemptLogin}>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Username</Form.Label>
								<Form.Control placeholder="Enter username" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>
							<Button variant="primary" type="submit">Submit</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Login;
