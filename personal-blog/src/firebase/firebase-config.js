import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBqfYKYmiFgtz4KIeCG9uCoAr3M33Y7iHo',
	authDomain: 'peronal-blog-15773.firebaseapp.com',
	projectId: 'peronal-blog-15773',
	storageBucket: 'peronal-blog-15773.appspot.com',
	messagingSenderId: '863995867869',
	appId: '1:863995867869:web:8715349fdd0f0e9d3e6134',
	measurementId: 'G-JK809799WC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const firebaseAuth = getAuth(app);
