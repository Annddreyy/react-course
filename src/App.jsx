import "./App.css";
import {Route, Routes} from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
	return (
		<div className="App">
			<HeaderContainer />
			<NavbarContainer store={props.store} />
			<main className="main">
				<Routes>
					<Route path="/dialogs/*" element={
						<DialogsContainer />
					} />
					<Route path="/profile/:userId?" element={
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
