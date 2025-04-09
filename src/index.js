import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App appState={state} dispatch={store.dispatch.bind(store)} />
			</BrowserRouter>
		</React.StrictMode>
	);
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

reportWebVitals();
