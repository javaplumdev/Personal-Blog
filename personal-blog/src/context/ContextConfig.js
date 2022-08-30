import React, { useState, createContext, useEffect } from 'react';
import { register, login, auth } from './Functions';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { onAuthStateChanged } from 'firebase/auth';

const MyContext = createContext();

const ContextProvider = ({ children }) => {
	let navigate = useNavigate();
	const [userGeneratedUID, setUserGeneratedUID] = useState();
	const [user, setUser] = useState();

	const generateUID = () => {
		setUserGeneratedUID(uuidv4);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<MyContext.Provider
			value={{ navigate, register, userGeneratedUID, generateUID, login }}
		>
			{children}
		</MyContext.Provider>
	);
};

export { MyContext, ContextProvider };
