import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () =>
  (
    <div className="App">
      <MuiThemeProvider>
        <Dashboard />
      </MuiThemeProvider>
    </div>
  );


export default App;
