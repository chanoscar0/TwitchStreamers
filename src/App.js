import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0)
  return (
    <div>
      Hello World! {count}
      <button onClick = {() => setCount(count+1)}>Click me!</button>
    </div>
  )
}

export default App;
