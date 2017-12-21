import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Remove from 'material-ui/svg-icons/action/delete';
import { Card } from 'material-ui/Card';

const styles = {
  contianer: {
    padding: '0.8rem',
    overflowY: 'auto',
    position: 'relative',
  },
  editButton: {

    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '-5px',
    right: '5px',
    zIndex: '9999999999999999999'
  }
};

const Widget = ({
  index, up, editMode, component, className, name
}) => (
  <Card
    showExpandableButton={false}
    className={className}
    style={styles.contianer}
  >
    {editMode ?
      <div style={styles.editButton}>
        <IconButton >
          <Remove className="top" onClick={() => up(index)}color="#cc0000" />
        </IconButton>
        <span>{name}</span>
      </div>
      : null}

    {component}
  </Card>
);
export default Widget;

Widget.propTypes = {
  index: PropTypes.number.isRequired,
  up: PropTypes.func,
  editMode: PropTypes.bool,
  component: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
};
