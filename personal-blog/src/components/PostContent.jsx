import React, { useState, useContext } from 'react';
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import { MyContext } from '../context/ContextConfig';
import { CategoryData } from '../context/Data';

const PostContent = () => {
	const { postContent, pickCategory, category } = useContext(MyContext);

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
					<div
						className={
							category.length === 0
								? ''
								: 'bg-primary rounded p-1 w-auto text-center'
						}
					>
						{category}
					</div>
					<hr></hr>
					<div className="d-flex flex-wrap">
						{CategoryData.map((item) => {
							return (
								<div
									key={item.id}
									className="categories m-1 bg-light text-dark p-1 rounded"
									onClick={() => pickCategory(item.name)}
								>
									{item.name}
								</div>
							);
						})}
					</div>
				</div>
			</Container>
		</>
	);
};

export default PostContent;
