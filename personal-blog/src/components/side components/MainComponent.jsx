import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

const MainComponent = () => {
	return (
		<>
			<div>
				<Link to="/post" className="w-100 text-decoration-none text-light">
					<AiOutlinePlus className="me-3" />
				</Link>
				<span>For you</span>
			</div>

			<div className="mt-4">
				<p>Hi</p>
			</div>
		</>
	);
};

export default MainComponent;
