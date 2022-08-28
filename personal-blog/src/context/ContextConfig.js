import React, { useState, createContext } from 'react';

const MyContext = createContext();

const ContextProvider = ({ children }) => {
	const [name, setName] = useState('John Doe');

	return <MyContext.Provider value={{ name }}>{children}</MyContext.Provider>;
};

export { MyContext, ContextProvider };
