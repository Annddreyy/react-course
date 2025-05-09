import React from 'react';
import classes from './App.module.css';
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import { UsersPage } from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from './hoc/withRouter.js';
import Preloader from './components/common/Preloader/Preloader';
import { AppStateType } from './redux/redux-store';
import { initializeApp } from './redux/app/appThunks';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component<PropsType> {
	catchAllUnhandledErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
		console.log( promiseRejectionEvent );
	}
	componentDidMount() {
		debugger;
		this.props.initializeApp();
		window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
	}

	componentWillUnmount() {
		window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div className={classes.app}>
				<div className={classes.container}>
					<HeaderContainer />
					<Navbar/>
					<main className={classes.main}>
						<Routes>
							<Route path="/dialogs/*" element={
								<React.Suspense fallback={<div>loading</div>}>
									<DialogsContainer />
								</React.Suspense>
							} />
							<Route path="/profile/:userId?" element={
								<ProfileContainer />
							} />
							<Route path="/users" element={
								<UsersPage />
							} />
							<Route path="/login" element={
								<LoginContainer />
							} />
							<Route path='*' element={<Navigate to='/' />} />
						</Routes>
					</main>
				</div>
			</div>
		)
	}
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
	initialized: boolean
};

type MapDispatchToPropsType = {
	initializeApp: () => void
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		initialized: state.app.initialized
	}
};

export default compose(
	connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { initializeApp }),
	withRouter
)(App);
