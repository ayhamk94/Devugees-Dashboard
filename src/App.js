import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blue500, white, darkBlack } from 'material-ui/styles/colors';
import Dashboard from './components/Dashboard';
import AppNav from './components/Nav';
import widgetsData from './data';
import './App.css';


const appTheme = getMuiTheme({
  palette: {
    primary1Color: darkBlack,
    accent1Color: blue500,
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
    };
  }
  componentWillMount() {
    this.setState({ widgets: widgetsData });
  }

  addRemoveWidgets(index) {
    const d = this.state.widgets;
    d[index].mounted = !d[index].mounted;
    this.setState({ widgets: d });
  }


  ToggleEditMode = () => { this.setState({ editMode: !this.state.editMode }); }

  render() {
    const { widgets, editMode } = this.state;
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={appTheme}>
          <AppNav
            ToggleEditMode={this.ToggleEditMode}
            data={widgets}
            addRemoveWidgets={widgets => this.addRemoveWidgets(widgets)}
          />
          <Dashboard
            addRemoveWidgets={widgets => this.addRemoveWidgets(widgets)}
            editMode={editMode}
            data={widgets}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}


export default App;
