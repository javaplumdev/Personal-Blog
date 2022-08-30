import React, { useState, createContext } from 'react';
import { register } from './Functions';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const MyContext = createContext();

const ContextProvider = ({ children }) => {
	let navigate = useNavigate();
	const [userGeneratedUID, setUserGeneratedUID] = useState();

	const generateUID = () => {
		setUserGeneratedUID(uuidv4);
	};

	return (
		<MyContext.Provider
			value={{ navigate, register, userGeneratedUID, generateUID }}
		>
			{children}
		</MyContext.Provider>
	);
};

export { MyContext, ContextProvider };
