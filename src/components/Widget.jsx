import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


const styles = {
  contianer: {
    padding: '1rem',
    overflowY: 'scroll',
    position: 'relative'
  },
  editButton: {
    position: 'absolute',
    top: '-5px',
    right: '-5px',
  }
};

const Widget = props => (
  <Paper
    zDepth={1}
    className={props.className}
    style={styles.contianer}
  >
    {props.editMode ? <IconButton style={styles.editButton}><NavigationClose color="#cc0000" /></IconButton> : null}
    {props.component}
  </Paper>
);
export default Widget;
