import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation.js';
import { Sidebar } from './components/Sidebar.js';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Sidebar />
        <Navigation />
      </ThemeProvider>
    </div>
  );
}

export default App;
