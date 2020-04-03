/** @format */

import { Container } from "@material-ui/core";
import ApolloClient from "apollo-boost";
import React, { useEffect, useRef } from "react";
import { ApolloProvider } from "react-apollo";
import { Provider } from "unstated";
import "./App.css";
import Routes from "./routes/Routes";
import Lottie from "lottie-web";
import { BrowserRouter as Router } from 'react-router-dom';
import { isLocalhost } from "./serviceWorker";

const App: React.FC = () => {

	const client = new ApolloClient({
		uri: isLocalhost ? "http://192.168.0.100:4000" : "http://119.246.37.218:4000",
		request: (operation) => {
			const token = localStorage.getItem("token");
			operation.setContext({
				headers: {
					authorization: token ? `Bearer ${token}` : "",
				},
			});
		},
	});

	const clickEl = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const anim = Lottie.loadAnimation({
			container: clickEl.current as Element,
			renderer: "svg",
			loop: false,
			autoplay: false,
			path: "/animations/click.json",
		});

		anim.addEventListener("data_ready", () => {
			anim.goToAndStop(2, true);
		});

		document.addEventListener("click", (e) => {
			anim.playSegments([0, 60], true);

			if (clickEl.current) {
				clickEl.current.style.left = `${e.clientX}px`;
				clickEl.current.style.top = `${e.clientY}px`;
			}
		});

		return () => {
			anim.destroy();
		};
	}, []);

	return (
		<ApolloProvider client={client}>
			<Provider>
				<Container className="app">
					<div ref={clickEl} style={{
						position: "fixed",
						width: 200,
						height: 200,
						transform: "translate(-50%, -50%)",
						pointerEvents: "none",
						zIndex: 1000,
					}}/>
		<Router>
					<Routes />
		</Router>
				</Container>
			</Provider>
		</ApolloProvider>
	);
};

export default App;
