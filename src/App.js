// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/redux';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import InboxScreen from './components/InboxScreen';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <InboxScreen />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
