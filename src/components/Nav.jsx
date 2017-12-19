import React from 'react';
import AppBar from 'material-ui/AppBar';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconButton from 'material-ui/IconButton';
import SideDrawer from './SideDrawer';

class AppNav extends React.Component {
  render() {
    const { ToggleEditMode, data, addRemoveWidgets } = this.props;
    return [
      <AppBar
        title="St. Helens Dashboard"
        iconElementRight={<IconButton onClick={ToggleEditMode}><ModeEdit /></IconButton>}
        onLeftIconButtonClick={() => this.refs.sideDrawer.handleToggle()}
      />,
      <SideDrawer
        ref="sideDrawer"
        up={data => this.props.addRemoveWidgets(data)}
        widgets={data}
      />
    ];
  }
}
export default AppNav;
