import React from 'react';
import classes from './App.module.css';
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar.tsx";
import UsersContainer from "./components/Users/UsersContainer.tsx";
import ProfileContainer from "./components/Profile/ProfileContainer.tsx";
import HeaderContainer from "./components/Header/HeaderContainer.tsx";
import LoginContainer from './components/Login/LoginContainer.tsx';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from './hoc/withRouter.js';
import { actions } from './redux/app/appReducer.ts';
import Preloader from './components/common/Preloader/Preloader.tsx';
import { AppStateType } from './redux/redux-store.ts';

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer.tsx"));

class App extends React.Component<PropsType> {
	catchAllUnhandledErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
		console.log( promiseRejectionEvent );
	}
	componentDidMount() {
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
								<UsersContainer />
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
	connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { initializeApp: actions.setInitializedActionCreator }),
	withRouter
)(App);
