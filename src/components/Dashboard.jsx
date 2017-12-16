import React from 'react';
import Paper from 'material-ui/Paper';
import WidgetsContainer from './WidgetsContainer';
import Sidebar from './Sidebar';


const Dashboard = () =>
  (
    <Paper style={{
       display: 'flex',
       backgroundColor: '#cccccc',
       borderRadius: 'none',
}}
    >
      <Sidebar />
      <WidgetsContainer />
    </Paper>

  );
export default Dashboard;
