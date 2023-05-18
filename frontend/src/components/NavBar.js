import './NavBar.css'
import { Container, Col, Row, Column, Button, Alert, Form, Navbar, Nav, NavDropdown } from 'react-bootstrap'

function NavBarComponent(props)
{
	function signOut()
	{
		localStorage.setItem("token", "")
		localStorage.setItem("user_id", "")
		window.location.replace("http://localhost:3000/login")
	}

	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">My Games List</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/all-lists">Lists</Nav.Link>
						<Nav.Link href="/search">Search</Nav.Link>
						<Nav.Link href="/epic-games">Free Epic Games</Nav.Link>
						<Nav.Link onClick={signOut}>Logout</Nav.Link>
						{ props.isList && <NavDropdown title="Manage List" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Add Game</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.2">Remove Game</NavDropdown.Item>
						</NavDropdown> }
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
	
}

export default NavBarComponent