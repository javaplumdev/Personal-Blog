import React, { useState, createContext, useEffect } from 'react';
import { register, login, auth, logout } from './Functions';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { onAuthStateChanged } from 'firebase/auth';
import {
	collection,
	onSnapshot,
	setDoc,
	doc,
	serverTimestamp,
	query,
	orderBy,
} from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
import { toast } from 'react-toastify';
import { CategoryData } from './Data';

const MyContext = createContext();

const ContextProvider = ({ children }) => {
	let navigate = useNavigate();
	const [userGeneratedUID, setUserGeneratedUID] = useState();
	const [user, setUser] = useState();
	const [users, setUsers] = useState();

	const [postContents, setPostContents] = useState();
	const [category, setCategory] = useState([]);

	const generateUID = () => {
		setUserGeneratedUID(uuidv4);
	};

	const postContent = (title, content) => {
		if (
			title.value === '' ||
			content.value === '' ||
			!title.trim() ||
			!content.trim()
		) {
			console.log('Enter contents');
		} else {
			generateUID();
			setDoc(doc(db, 'posts', userGeneratedUID), {
				id: uuidv4(),
				title: title,
				content: content,
				owner: user.uid,
				timestamp: serverTimestamp(),
			});

			toast.success('Posted!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

			navigate('/home');
		}
	};

	const pickCategory = (name) => {
		const findCategory = CategoryData.find((item) => item.name === name);

		setCategory(findCategory.name);
	};

	useEffect(() => {
		const queryPosts = query(
			collection(db, 'posts'),
			orderBy('timestamp', 'desc')
		);

		onSnapshot(collection(db, 'users'), (snapshot) => {
			setUsers(snapshot.docs.map((doc) => ({ ...doc.data() })));
		});

		onSnapshot(queryPosts, (snapshot) => {
			setPostContents(snapshot.docs.map((doc) => ({ ...doc.data() })));
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
				category,
				pickCategory,
				users,
				postContents,
				postContent,
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
