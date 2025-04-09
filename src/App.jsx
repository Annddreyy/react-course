import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from 'react-router-dom'


const App = (props) => {
	debugger;
	return (
		<div className="App">
			<Header />
			<Navbar state={props.appState.sidebar} />
			<main className="main">
				<Routes>
					<Route path="/dialogs/*" element={
						<Dialogs state={props.appState.messagesPage} dispatch={props.dispatch} />
					} />
					<Route path="/profile" element={
						<Profile state={props.appState.profilePage} dispatch={props.dispatch} />
					} />
				</Routes>
			</main>
		</div>
	)
};

export default App;
