import classes from './App.module.css';
import { Route, Routes } from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';

const App = (props) => {
	return (
		<div className={classes.app}>
			<div className={classes.container}>
				<HeaderContainer />
				<NavbarContainer store={props.store} />
				<main className={classes.main}>
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
						<Route path="/login" element={
							<Login />
						} />
					</Routes>
				</main>
			</div>
		</div>
	)
};

export default App;
