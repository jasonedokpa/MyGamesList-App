import './Login.css'
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import background from "../images/background-image.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row, Column, Button, Alert, Form } from 'react-bootstrap'

function Login(props)
{
	const responseGoogle = (response) => {
		console.log(response);
	}

	return (
		<div style={{ backgroundImage: `url(${background})` }}>
			<GoogleLogin className='position-relative right-100'
			clientId="500707903126-vp80gueh9gn8vrcv6bo3ec1kpm36nqru.apps.googleusercontent.com"
			buttonText="Login"
			onSuccess={responseGoogle}
			onFailure={responseGoogle}
			cookiePolicy={'single_host_origin'}
			/>

			<Container>
				<h1 className="showow-sm text-sucess mt-5 p-3 text-center rounded">My Games App Login</h1>
				<Row>
					<Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
						<Form>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
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
