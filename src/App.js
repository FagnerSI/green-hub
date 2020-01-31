import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { Main } from '../src/screens/';
import store from '../src/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
