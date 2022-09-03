import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import MainComponent from './MainComponent';

const Content = () => {
	return (
		<Row className="my-4">
			<Col sm={12} md={8}>
				<MainComponent />
			</Col>
			<Col sm={12} md={4} className="d-none d-md-block">
				<div>
					<p>Hi</p>
				</div>
			</Col>
		</Row>
	);
};

export default Content;
