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

const Widget = ({index, up, editMode, component, className }) => (
  <Card
    showExpandableButton={false}
    className={className}
    style={styles.contianer}
  >
    {editMode ?
      <IconButton style={styles.editButton}>
        <NavigationClose onClick={()=> up(index)}color="#cc0000" />
      </IconButton> : null}
    {component}
  </Card>
);
export default Widget;
