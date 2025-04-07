import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom'


const App = (props) => {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Navbar />
				<main className="main">
					<Routes>
						<Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
						<Route path="/profile" element={<Profile posts={props.posts} />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;
