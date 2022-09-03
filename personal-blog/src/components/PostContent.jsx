import React, { useState, useContext } from 'react';
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import { MyContext } from '../context/ContextConfig';

const PostContent = () => {
	const { postContent } = useContext(MyContext);

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	return (
		<>
			<NavbarComponent />
			<Container>
				<div className="mt-5">
					<div className="d-flex justify-content-between align-items-center ">
						<h1>What do you think?</h1>
						<Button onClick={() => postContent(title, content)}>Submit</Button>
					</div>
					<FloatingLabel
						controlId="floatingTextarea"
						label="Comments"
						className=" mt-3"
					>
						<Form.Control
							as="textarea"
							placeholder="Title"
							style={{ resize: 'none', height: '65px' }}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</FloatingLabel>
					<FloatingLabel
						controlId="floatingTextarea2"
						label="Comments"
						className="my-3"
					>
						<Form.Control
							as="textarea"
							placeholder="Content"
							style={{ resize: 'none', height: '125px' }}
							onChange={(e) => setContent(e.target.value)}
						/>
					</FloatingLabel>
				</div>
			</Container>
		</>
	);
};

export default PostContent;
