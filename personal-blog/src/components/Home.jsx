import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

const Home = () => {
	return (
		<div className="bg-dark text-white py-1">
			<Container>
				<Button type="primary">Post</Button>
				<Row>
					<Col sm={12} md={8}>
						<div>
							<p>Hi</p>
						</div>
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
