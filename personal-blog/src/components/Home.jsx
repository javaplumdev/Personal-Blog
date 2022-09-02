import React, { useContext } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import MainComponent from './side components/MainComponent';
import { MyContext } from '../context/ContextConfig';
import NavbarComponent from './NavbarComponent';
import Content from './side components/Content';

const Home = () => {
	const { users, user } = useContext(MyContext);

	console.log(user);

	return (
		<div className="text-white py-1">
			<NavbarComponent />
			<Container>
				<Content />
			</Container>
		</div>
	);
};

export default Home;
