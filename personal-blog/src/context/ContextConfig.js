import React, { useState, createContext, useEffect } from 'react';
import { register, login, auth, logout } from './Functions';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

const MyContext = createContext();

const ContextProvider = ({ children }) => {
	let navigate = useNavigate();
	const [userGeneratedUID, setUserGeneratedUID] = useState();
	const [user, setUser] = useState();
	const [users, setUsers] = useState();

	const generateUID = () => {
		setUserGeneratedUID(uuidv4);
	};

	useEffect(() => {
		onSnapshot(collection(db, 'users'), (snapshot) => {
			setUsers(snapshot.docs.map((doc) => ({ ...doc.data() })));
		});
	}, []);

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
			value={{
				navigate,
				register,
				userGeneratedUID,
				generateUID,
				login,
				users,
				logout,
				user,
			}}
		>
			{children}
		</MyContext.Provider>
	);
};

export { MyContext, ContextProvider };
