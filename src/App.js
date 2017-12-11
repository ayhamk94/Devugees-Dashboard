import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Dashboard from './Dashboard';
class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
            <Dashboard/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
