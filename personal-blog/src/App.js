import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginform from './components/Loginform';
import Registerform from './components/Registerform';
import Reacthelmet from './components/Reacthelmet';
import Home from './components/Home';
import PostComponent from './components/PostComponent';
import PostContent from './components/PostContent';
import NavbarComponent from './components/NavbarComponent';
import { ContextProvider } from './context/ContextConfig';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
	document.body.classList.add('background');

	return (
		<ContextProvider>
			<div className="App">
				<Reacthelmet />
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>

				<Routes>
					<Route path="/" element={<Loginform />} />
					<Route path="/register" element={<Registerform />} />
					<Route
						path="/home"
						element={
							<>
								<NavbarComponent />
								<Home />
							</>
						}
					/>
					<Route
						path="/post"
						element={
							<>
								<NavbarComponent />
								<PostContent />
							</>
						}
					/>
					<Route
						path="/posts/:id"
						element={
							<>
								<NavbarComponent />
								<PostComponent />
							</>
						}
					/>
				</Routes>
			</div>
		</ContextProvider>
	);
}

export default App;
