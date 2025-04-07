import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let postData = [
	{ id: 1, message: "My first post", likesCount: 12 },
	{ id: 2, message: "My second post", likesCount: 21 },
	{ id: 3, message: "My third post", likesCount: 8 },
];

let dialogsData = [
	{ id: 1, name: "Andrey" },
	{ id: 2, name: "Katya" },
	{ id: 3, name: "Ivan" },
	{ id: 4, name: "Pete" },
	{ id: 5, name: "Petr" },
];

let messagesData = [
	{ id: 1, message: "Hi" },
	{ id: 2, message: "Hello!" },
	{ id: 3, message: "How are you?" },
	{ id: 4, message: "All ok" },
	{ id: 5, message: "Thank you" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App posts={postData} dialogs={dialogsData} messages={messagesData} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
