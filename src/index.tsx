import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./utils/react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";
import './index.css';

// A function that routes the user to the right place
// after login
const onRedirectCallback = (redirectResult?: RedirectLoginResult) => {
	console.log(
		'auth0 onRedirectCallback called with redirectState %o',
		redirectResult
	)

	// Clears auth0 query string parameters from url
	const targetUrl = redirectResult
		&& redirectResult.appState
		&& redirectResult.appState.targetUrl
			? redirectResult.appState.targetUrl
			: window.location.pathname
			
	history.push(targetUrl);
};

ReactDOM.render(
	<Auth0Provider
		domain={config.domain}
		client_id={config.clientId}
		redirect_uri={window.location.origin}
		onRedirectCallback={onRedirectCallback}
	>
		<App />
	</Auth0Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
