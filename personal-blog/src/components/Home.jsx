import React, { useContext } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import MainComponent from './side components/MainComponent';
import { MyContext } from '../context/ContextConfig';

const Home = () => {
	const { users, user } = useContext(MyContext);

	console.log(user);

	return (
		<div className="bg-dark text-white py-1">
			<Container>
				<Row>
					<Col sm={12} md={8}>
						<MainComponent />
					</Col>
					<Col sm={12} md={4} className="d-none d-md-block">
						<div>
							<p>Hi</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Home;
