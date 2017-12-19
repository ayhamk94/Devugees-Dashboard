import React from 'react';
import IconButton from 'material-ui/IconButton';
import Remove from 'material-ui/svg-icons/action/delete';
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
    // zIndex: '9999999999999999999'
  }
};

const Widget = ({
  index, up, editMode, component, className
}) => (
  <Card
    showExpandableButton={false}
    className={className}
    style={styles.contianer}
  >
    {editMode ?
      <IconButton style={styles.editButton}>
        <Remove className="top" onClick={() => up(index)}color="#cc0000" />
      </IconButton> : null}
    {component}
  </Card>
);
export default Widget;
