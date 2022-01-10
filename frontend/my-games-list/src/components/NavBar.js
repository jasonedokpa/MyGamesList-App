import './NavBar.css'
import { Container, Col, Row, Column, Button, Alert, Form, Navbar, Nav, NavDropdown } from 'react-bootstrap'

function NavBarComponent()
{
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">My Games List</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/all-lists">Lists</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
	
}

export default NavBarComponent