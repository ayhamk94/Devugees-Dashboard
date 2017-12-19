import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import WidgetsContainer from './WidgetsContainer';
import Sidebar from './Sidebar';

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#E0E0E0',
    borderRadius: 'none',
    alignItems: 'flex-start'
  }
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }
  handleState(index) {
    const d = this.state.data;
    d[index].mounted = !d[index].mounted;
    this.setState({ data: d });
  }
  render() {
    const { editMode, drawerOpen, toggleDrawer } = this.props;
    const { data } = this.state;
    return (
      <Paper style={styles.container}>
        <Sidebar
          up={data => this.handleState(data)}
          widgets={data}
          drawerOpen={drawerOpen}
          toggleDrawer={toggleDrawer}
        />
        <WidgetsContainer
          up={data => this.handleState(data)}
          editMode={editMode}
          widgets={data}
        />
      </Paper>
    );
  }
}


export default Dashboard;
