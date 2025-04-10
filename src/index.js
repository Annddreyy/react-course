import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import Provider from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<App appState={state} dispatch={store.dispatch.bind(store)} store={store} />
				</Provider>
			</BrowserRouter>
		</React.StrictMode>
	);
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});

reportWebVitals();
