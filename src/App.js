import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Roster from './containers/Roster';
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})
const App = () => {
  return (
      <ApolloProvider client={client}>
        <Roster />
      </ApolloProvider>
  )
}
export default App;
