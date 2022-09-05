import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../context/ContextConfig';
import { Container, Spinner } from 'react-bootstrap';

const PostComponent = () => {
	const { id } = useParams();
	const { postContents, users, isLoading } = useContext(MyContext);

	const filteredContent =
		postContents?.filter && postContents.filter((item) => item.id === id);

	return (
		<Container className="mt-4">
			{isLoading ? (
				<div
					className="d-flex justify-content-center align-items-center"
					style={{ height: '65vh' }}
				>
					<Spinner animation="border" variant="light" />
				</div>
			) : (
				filteredContent?.map &&
				filteredContent.map((item) => {
					return users.map((data) => {
						if (data.id === item.owner) {
							return (
								<div key={item.id} className="content">
									<h2>{item.title}</h2>
									<small>By: {data.email}</small>
									<p className="lead">{item.content}</p>
								</div>
							);
						}
					});
				})
			)}
		</Container>
	);
};

export default PostComponent;
