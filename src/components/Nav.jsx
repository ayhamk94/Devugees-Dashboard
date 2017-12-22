import React from 'react';
import PropTypes from 'prop-types';
import { amber700 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconButton from 'material-ui/IconButton';
import SideDrawer from './SideDrawer';

class AppNav extends React.Component {
  render() {
    const { ToggleEditMode, data, addRemoveWidgets, editMode } = this.props;
    return [
      <AppBar
        titleStyle={{ color: amber700 }}
        iconStyleLeft={{ color: amber700 }}
        key="AppBar"
        title="St. Helens Dashboard"
        iconElementRight={<IconButton onClick={ToggleEditMode}><ModeEdit color={editMode ? '#FFA000' : '#fff' }/></IconButton>}
        onLeftIconButtonClick={() => this.refs.sideDrawer.handleToggle()}
      />,
      <SideDrawer
        key="SideDrawer"
        ref="sideDrawer"
        up={data => addRemoveWidgets(data)}
        widgets={data}
      />
    ];
  }
}
export default AppNav;


AppNav.propTypes = {
  ToggleEditMode: PropTypes.func,
  data: PropTypes.array.isRequired,
  addRemoveWidgets: PropTypes.func,
};
