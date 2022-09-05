import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import MainComponent from './side components/MainComponent';
import { MyContext } from '../context/ContextConfig';

import Content from './side components/Content';

const Home = () => {
	const { user } = useContext(MyContext);

	return (
		<div className="text-white py-1">
			<Container>
				<Content />
			</Container>
		</div>
	);
};

export default Home;
