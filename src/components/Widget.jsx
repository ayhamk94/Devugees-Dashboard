import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Card } from 'material-ui/Card';

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
  <Card
    showExpandableButton={false}
    className={props.className}
    style={styles.contianer}
  >
    {props.editMode ? <IconButton style={styles.editButton}><NavigationClose color="#cc0000" /></IconButton> : null}
    {props.component}
  </Card>
);
export default Widget;
