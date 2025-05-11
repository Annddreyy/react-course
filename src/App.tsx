import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import LoginContainer from './components/Login/LoginContainer';
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { UsersPage } from "./components/Users/UsersContainer";
import { withRouter } from './hoc/withRouter.js';
import ChatPage from './pages/ChatPage/ChatPage';
import { initializeApp } from './redux/app/appThunks';
import { AppStateType } from './redux/redux-store';

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  	key,
  	label: `nav ${key}`,
}));


//const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

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
		return (
			<>
			<Layout>
      			<Header style={{ display: 'flex', alignItems: 'center' }}>
        			<div className="demo-logo" />
        			<Menu
						color='#222222'
          				theme="dark"
          				mode="horizontal"
          				defaultSelectedKeys={['1']}
          				items={items1}
          				style={{ flex: 1, minWidth: 0 }}
        			/>
      			</Header>
      			<Layout>
        			<Sider width={250} style={{ background: '#222222' }}>
          				<Navbar/>
        			</Sider>
        			<Layout style={{ padding: '0 24px 24px', background: '#141414' }}>
          				<Breadcrumb
            				items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
            				style={{ margin: '16px 0' }}
          				/>
          				<Content
            				style={{
              					padding: 24,
              					margin: 0,
              					minHeight: 280,
              					background: '#222222',
              					borderRadius: 16,
            				}}
          				>
            				<Routes>
								<Route path="/dialogs/*" element={
									<React.Suspense fallback={<div>loading</div>}>
										<ChatPage />
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
          				</Content>
        			</Layout>
      			</Layout>
    		</Layout>
			</>
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
