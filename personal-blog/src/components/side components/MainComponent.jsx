import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { MyContext } from '../../context/ContextConfig';

const MainComponent = () => {
	const { postContents } = useContext(MyContext);

	return (
		<>
			<div>
				<Link to="/post" className="w-100 text-decoration-none text-light">
					<AiOutlinePlus className="me-3" />
				</Link>
				<span>For you</span>
			</div>

			<div className="mt-4">
				{postContents?.map &&
					postContents.map((item) => {
						return (
							<div key={item.id}>
								<h1>{item.title}</h1>
								<div>
									<p>{item.content}</p>
								</div>
								<hr></hr>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default MainComponent;
