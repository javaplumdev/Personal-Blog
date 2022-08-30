// FIREBASE FUNCTIONS
// FIREBASE FUNCTIONS
// FIREBASE FUNCTIONS
// FIREBASE FUNCTIONS
// FIREBASE FUNCTIONS

import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase-config';

const register = async (email, password) => {
	onAuthStateChanged(auth, (currentUser) => {
		try {
			setDoc(doc(db, 'users', currentUser.uid), {
				id: currentUser.uid,
				email: email,
				password: password,
			});
		} catch (error) {
			console.log(error.message);
		}
	});

	return createUserWithEmailAndPassword(auth, email, password);
};

export { register };
