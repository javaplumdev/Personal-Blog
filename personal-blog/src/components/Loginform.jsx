import React, { useContext } from 'react';
import { MyContext } from '../context/ContextConfig';

const Loginform = () => {
	const { name } = useContext(MyContext);

	return (
		<section className="login-form-holder">
			<div>Loginform {name}</div>
		</section>
	);
};

export default Loginform;
