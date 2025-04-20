import classes from './App.module.css';
import { Route, Routes } from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from './components/Login/LoginContainer';

const App = () => {
	return (
		<div className={classes.app}>
			<div className={classes.container}>
				<HeaderContainer />
				<Navbar/>
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
							<LoginContainer />
						} />
					</Routes>
				</main>
			</div>
		</div>
	)
};

export default App;
