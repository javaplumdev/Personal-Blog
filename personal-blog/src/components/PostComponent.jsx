import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../context/ContextConfig';
import { Container } from 'react-bootstrap';

const PostComponent = () => {
	const { id } = useParams();
	const { postContents } = useContext(MyContext);

	const filteredContent =
		postContents?.filter && postContents.filter((item) => item.id === id);

	return (
		<Container className="mt-4">
			{filteredContent?.map &&
				filteredContent.map((item) => {
					return (
						<div key={item.id}>
							<h1>{item.title}</h1>

							<p>{item.content}</p>
						</div>
					);
				})}
		</Container>
	);
};

export default PostComponent;
