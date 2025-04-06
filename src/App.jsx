import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
	return (
		<div className="App">
            <Header />
			<Navbar />
			{/* <Profile /> */}
			<main className="main">
				<Dialogs />
			</main>
		</div>
	);
};

export default App;
