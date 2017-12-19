import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
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

const Dashboard = ({
  editMode, data, addRemoveWidgets
}) =>
  (
    <Paper style={styles.container}>
      <SideDrawer
        up={data => addRemoveWidgets(data)}
        widgets={data}
      />
      <WidgetsContainer
        up={data => addRemoveWidgets(data)}
        editMode={editMode}
        widgets={data}
      />
    </Paper>

    );

export default Dashboard;

Dashboard.propTypes = {
  editMode: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  data: PropTypes.array,
  addRemoveWidgets: PropTypes.func,
};
