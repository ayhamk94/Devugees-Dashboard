import React from 'react';
import AppBar from 'material-ui/AppBar';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconButton from 'material-ui/IconButton';

const AppNav = props => (
  <AppBar title="React Dashboard" iconElementRight={<IconButton onClick={props.ToggleEditMode}><ModeEdit /></IconButton>} />
);

export default AppNav;
