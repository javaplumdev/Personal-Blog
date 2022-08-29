import React, { useContext } from 'react';
import { MyContext } from '../context/ContextConfig';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registerform = () => {
	const { name } = useContext(MyContext);

	const register = (e) => {
		e.preventDefault();

		console.log('Tangina');
	};

	return (
		<section className="login-form-holder">
			<Form className="form" onSubmit={register}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />

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
