import React from 'react';
import Paper from 'material-ui/Paper';


const Widget = (props)=> (
  <Paper zDepth={1} style={{padding: '1rem', margin:'0.5rem', borderRadius:'0.4rem'}}>
    {props.children}
  </Paper>
)
export default Widget;
