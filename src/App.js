import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation.js';
import { Sidebar } from './components/Sidebar.js';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import { Main } from './components/Main';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Sidebar />
        <Navigation />
        < Main />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
