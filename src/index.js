import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./redux/state";
import { addPost, setPostText } from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App appState={state} addPost={addPost} setPostText={setPostText} />
			</BrowserRouter>
		</React.StrictMode>
	);
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

reportWebVitals();
