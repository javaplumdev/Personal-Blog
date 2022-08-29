import React, { useContext } from 'react';
import { MyContext } from '../context/ContextConfig';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Loginform = () => {
	const { name } = useContext(MyContext);

	const login = (e) => {
		e.preventDefault();

		console.log('Tangina');
	};

	return (
		<section className="login-form-holder">
			<Form className="form" onSubmit={login}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit" className="w-100">
					Login
				</Button>
				<Form.Text className="text-muted">
					Don't have an account? <Link to="/register">Register here</Link>
				</Form.Text>
			</Form>
		</section>
	);
};

export default Loginform;