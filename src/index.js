import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App store={store} />
		</Provider>
	</BrowserRouter>
);

reportWebVitals();
