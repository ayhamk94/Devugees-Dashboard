import React from 'react';
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
const Dashboard = props =>
  (
    <Paper style={styles.container}>
      <Sidebar widgets={props.widgets} />
      <WidgetsContainer
        editMode={props.editMode}
        widgets={props.widgets}
      />
    </Paper>
  );
export default Dashboard;
