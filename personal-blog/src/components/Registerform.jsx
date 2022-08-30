import React, { useContext, useState } from 'react';
import { MyContext } from '../context/ContextConfig';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registerform = () => {
	const { register, navigate, generateUID } = useContext(MyContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		generateUID();
		try {
			await register(email, password);
			navigate('/');
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<section className="login-form-holder">
			<Form className="form" onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						onChange={(e) => setEmail(e.target.value)}
					/>

					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-2" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="text"
						className="mb-2"
						placeholder="Enter password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Form.Control type="text" placeholder="Re-enter password" />
				</Form.Group>
				<Form.Group className="mb-2" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit" className="w-100">
					Create Account
				</Button>
				<Form.Text className="text-muted">
					Already have an account? <Link to="/">Login here</Link>
				</Form.Text>
			</Form>
		</section>
	);
};

export default Registerform;
