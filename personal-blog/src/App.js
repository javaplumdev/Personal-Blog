import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginform from './components/Loginform';
import Registerform from './components/Registerform';
import Reacthelmet from './components/Reacthelmet';
import { ContextProvider } from './context/ContextConfig';

function App() {
	return (
		<ContextProvider>
			<div className="App">
				<Reacthelmet />
				<Routes>
					<Route path="/" element={<Loginform />} />
					<Route path="/register" element={<Registerform />} />
				</Routes>
			</div>
		</ContextProvider>
	);
}

export default App;
