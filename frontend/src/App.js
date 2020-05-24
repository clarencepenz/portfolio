import React from 'react';
import { Provider } from 'react-redux'
import {store } from './store'
import './App.css';
import Routes from './routes/Routes';

function App() {
  return (
    <Provider store={store}>
      <div>
          <Routes/>
      </div>
    </Provider>
  );
}

export default App;
