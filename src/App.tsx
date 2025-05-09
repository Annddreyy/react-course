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
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  	key,
  	label: `nav ${key}`,
}));


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

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
