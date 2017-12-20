import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from './components/Dashboard';
import AppNav from './components/Nav';
import widgetsData from './data';
import './App.css';


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
      mounted: []
    };
  }
  componentWillMount() {
    this.setState({ widgets: widgetsData });

    if (!localStorage.getItem('mounted')) {
      this.saveLocal(widgetsData)
    } else {
      const mounted = JSON.parse(localStorage.getItem('mounted'))
      this.setState({ mounted })
    }
  }
  handleLocalStorate(action){
    this.saveLocal(action)
  }
  saveLocal(widgets){
    const mounted = widgets.filter(w => w.mounted).map(w => w.id)
    localStorage.setItem('mounted', JSON.stringify(mounted))
    this.setState({ mounted })
  }

  componentDidMount(){
    const { mounted } = this.state
    console.log(mounted);
  }

  addRemoveWidgets(index) {
    const d = this.state.widgets;
    d[index].mounted = !d[index].mounted;
    this.setState({ widgets: d });
    this.handleLocalStorate(d)
  }


  ToggleEditMode = () => { this.setState({ editMode: !this.state.editMode }); }

  render() {
    const { widgets, editMode, drawerOpen, mounted } = this.state;
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
