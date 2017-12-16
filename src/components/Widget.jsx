import React from 'react';
import Paper from 'material-ui/Paper';


const Widget = props => (

  <Paper
    zDepth={1}
    className={props.className}
    style={{
      padding: '1rem',
      overflowY: 'auto'
    }}
  >
    {props.children}
  </Paper>
);
export default Widget;
