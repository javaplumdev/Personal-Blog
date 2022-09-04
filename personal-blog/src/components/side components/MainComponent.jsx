import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { MyContext } from '../../context/ContextConfig';

const MainComponent = () => {
	const { postContents, users, user } = useContext(MyContext);

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
								{item.content.length >= 30 ? (
									<h2>{item.title.slice(0, 30)}...</h2>
								) : (
									<h2>{item.title}</h2>
								)}
								<div>
									{item.content.length >= 30 ? (
										<p>{item.content.slice(0, 30)}...</p>
									) : (
										<p>{item.content}</p>
									)}
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
