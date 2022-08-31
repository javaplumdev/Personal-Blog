import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { MyContext } from '../context/ContextConfig';

const NavbarComponent = () => {
	const { logout, navigate } = useContext(MyContext);

	const handleLogout = () => {
		navigate('/');
		logout();
	};

	return (
		<div className="bg-dark text-white py-3">
			<Container>
				Navbar
				<Button type="outline-button" onClick={() => handleLogout()}>
					Logout
				</Button>
			</Container>
		</div>
	);
};

export default NavbarComponent;
