import React from 'react';
import { Provider } from 'react-redux'
import {store } from './store'
import './App.css';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <Provider store={store}>
      <div>
          <h1>Portfolio Template</h1>
          <Portfolio/>
      </div>
    </Provider>
  );
}

export default App;
