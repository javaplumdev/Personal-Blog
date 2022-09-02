import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { MyContext } from '../context/ContextConfig';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HiHome, HiBookOpen } from 'react-icons/hi';
import { BsFillBookmarksFill, BsCaretDownSquareFill } from 'react-icons/bs';

const NavbarComponent = () => {
	const { logout, navigate } = useContext(MyContext);

	const handleLogout = () => {
		navigate('/');
		logout();
	};

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/home">THE BLOG</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>
					<Nav>
						<Nav.Link href="#deets">
							<HiHome size="25" className="mx-2" />
						</Nav.Link>
						<Nav.Link href="#meme">
							<BsFillBookmarksFill size="25" />
						</Nav.Link>
						<Nav.Link href="#memes">
							<HiBookOpen size="25" className="mx-2" />
						</Nav.Link>
						<Nav.Link href="#memesz">
							<BsCaretDownSquareFill size="25" />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComponent;
