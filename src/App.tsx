import React from 'react';
import './App.css';
import { useAuth0 } from './utils/react-auth0-spa';
import { Guest } from './views/guest/Guest';
import { Router } from './router/Router';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const App = () => {
  const {
    role,
    isInitializing,
    isAuthenticated,
    getIdTokenClaims
  } = useAuth0();

  // loading page.
  if (isInitializing) {
    return (
      <div>loading...</div>
    );
  }

  // console log jwt tokens
  if (isAuthenticated) {

    const client = new ApolloClient({
      uri: 'http://3.12.129.211:8080/v1/graphql',
      request: async (operation) => {
        const token = await getIdTokenClaims();

        // console.log(token.__raw);

        operation.setContext({
          headers: {
            Authorization: `Bearer ${token.__raw}`,
          },
        });
      },
    });

    return (
      <ApolloProvider client={client}>
        <Router/>
      </ApolloProvider>
    )
  } else {
    return <Guest/>;
  }
}

export default App;