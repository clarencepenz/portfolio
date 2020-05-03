import React from 'react';
import { Provider } from 'react-redux'
import {store } from './store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>
          <h1>Redux Boilerplate</h1>
      </div>
    </Provider>
  );
}

export default App;
