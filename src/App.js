import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from './components/Dashboard';
import AppNav from './components/Nav';
import './App.css';
import widgets from './data';


const appTheme = getMuiTheme({
  palette: {
    primary1Color: '#212121',
    primary2Color: '#99003d',
    primary3Color: '#ffcce0',
  },
  appBar: {
    height: 60,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      widgets: [],
      drawerOpen: false
    };
  }
  componentWillMount() {
    this.handleState(widgets);
  }
  handleState(widgets) {
    this.setState({ widgets });
  }
  toggleDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen })

  ToggleEditMode = () => { this.setState({ editMode: !this.state.editMode }); }

  render() {
    const { widgets, editMode, drawerOpen } = this.state;
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={appTheme}>
          <AppNav
            ToggleEditMode={this.ToggleEditMode}
            toggleDrawer={this.toggleDrawer}
          />
          <Dashboard
            toggleDrawer={this.toggleDrawer}
            editMode={editMode}
            data={widgets}
            drawerOpen={drawerOpen}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}


export default App;
