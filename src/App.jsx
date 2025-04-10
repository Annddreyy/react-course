import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
	return (
		<div className="App">
			<Header />
			<Navbar state={props.appState.sidebar} />
			<main className="main">
				<Routes>
					<Route path="/dialogs/*" element={
						<DialogsContainer store={props.store} />
					} />
					<Route path="/profile" element={
						<Profile store={props.store} />
					} />
				</Routes>
			</main>
		</div>
	)
};

export default App;
