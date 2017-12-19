import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import WidgetsContainer from './WidgetsContainer';
import SideDrawer from './SideDrawer';

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#E0E0E0',
    borderRadius: 'none',
    alignItems: 'flex-start'
  }
};

class Dashboard extends Component {
  render() {
    const {
      editMode, drawerOpen, toggleDrawer, data
    } = this.props;
    return (
      <Paper style={styles.container}>
        <SideDrawer
          up={data => this.props.addRemoveWidgets(data)}
          widgets={data}
          drawerOpen={drawerOpen}
          toggleDrawer={toggleDrawer}
        />
        <WidgetsContainer
          up={data => this.props.addRemoveWidgets(data)}
          editMode={editMode}
          widgets={data}
        />
      </Paper>
    );
  }
}


export default Dashboard;
