import React from 'react';
import { Link } from 'react-router-dom';

const MainComponent = () => {
	return (
		<>
			<div className="d-flex justify-content-center ">
				<Link to="/post" className="w-100 text-decoration-none">
					<div className="post-content my-3 text-light">Post</div>
				</Link>
			</div>
			<div>
				<p>Hi</p>
			</div>
		</>
	);
};

export default MainComponent;
