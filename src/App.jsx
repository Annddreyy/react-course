import "./App.css";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
	return (
		<div className="App">
			<Header />
			<NavbarContainer store={props.store} />
			<main className="main">
				<Routes>
					<Route path="/dialogs/*" element={
						<DialogsContainer />
					} />
					<Route path="/profile/*" element={
						<ProfileContainer />
					} />
					<Route path="/users" element={
						<UsersContainer />
					} />
				</Routes>
			</main>
		</div>
	)
};

export default App;
