import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Menu = () => {
	return (
		<Navbar bg="info" expand="lg">
			<Container>
				<Navbar.Brand href="#home">Daily News</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">About</Nav.Link>
						<Nav.Link href="#link">Blog</Nav.Link>
						<Nav.Link href="#link">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Menu;
