import { Container } from "@material-ui/core";
import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Provider } from "unstated";
import "./App.css";
import { Routes } from "./routes/Routes";

const App: React.FC = () => {
  const client = new ApolloClient({
	uri: "http://localhost:4000",
	request: (operation) => {
		const token = localStorage.getItem("token");
		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : "",
			},
		});
	},
  });

  return (
	<ApolloProvider client={client}>
		<Provider>
			<Container className="app">
				<Routes/>
			</Container>
		</Provider>
	</ApolloProvider>
  );
};

export default App;
