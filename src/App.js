import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from './components/Dashboard';
import AppNav from './components/Nav';
import Sidebar from './components/Sidebar';

import './App.css';

const App = () =>
  (
    <div className="App">
      <MuiThemeProvider>
        <AppNav />
        <Dashboard />
      </MuiThemeProvider>
    </div>
  );


export default App;
