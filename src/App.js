import React from 'react';
import { Provider } from 'react-redux';
import store from './store/redux';

import InboxScreen from './components/InboxScreen';

import './index.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <InboxScreen />
      </div>
    </Provider>
  );
}

export default App;
