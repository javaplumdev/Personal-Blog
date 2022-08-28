import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Reacthelmet = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Blog Website</title>
				<link rel="canonical" href="https://#/" />
				<link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
			</Helmet>
		</HelmetProvider>
	);
};

export default Reacthelmet;
