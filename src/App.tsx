/** @format */

import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { useAuth0 } from "./utils/react-auth0-spa";
import { Guest } from "./views/guest/Guest";
import { Router } from "./router/Router";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Cursor } from "./components/Cursor/Cursor";
import { ClickWave } from "./components/ClickWave/ClickWave";
import { GradientPass } from "./components/GradientPass/GradientPass";
import { BackgroundGrid } from "./components/BackgroundGrid/BackgroundGrid";
import { LoadingAnimation } from "./components/LoadingAnimation/LoadingAnimation";

const App = () => {
	const { isAuthenticated, getIdTokenClaims, isInitializing } = useAuth0();

	return (
		<>
			<Cursor />
			<ClickWave />
			<GradientPass />
			<LoadingAnimation isInitializing={isInitializing} />

			{!isInitializing && (
				<>
					{isAuthenticated ? (
						<ApolloProvider
							client={
								new ApolloClient({
									uri: "http://3.12.129.211:8080/v1/graphql",
									request: async (operation) => {
										const token = await getIdTokenClaims();
										operation.setContext({
											headers: {
												Authorization: `Bearer ${token.__raw}`,
											},
										});
									},
								})
							}>
							<Router />
						</ApolloProvider>
					) : (
						<Guest />
					)}
				</>
			)}

			<BackgroundGrid />
		</>
	);
};

export default App;
