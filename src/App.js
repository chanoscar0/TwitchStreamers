import React, { Component, useState } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})
const App = () => {

  const [count, setCount] = useState(0)
  return (
    <div>
      <ApolloProvider client={client}>
        Hello World! {count}
        <button onClick = {() => setCount(count+1)}>Click me!</button>
      </ApolloProvider>
    </div>
  )
}

export default App;
