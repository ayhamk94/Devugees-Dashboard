import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Drawer from 'material-ui/Drawer';

export default class SideDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    const { widgets, up } = this.props;
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >

          <List>
            <Subheader>Avilable Widgets</Subheader>
            {widgets.map((widget, i) => {
              if (!widget.mounted) {
                return (
                  <ListItem
                    rightIcon={<AddCircle onClick={() => up(i)} hoverColor="#2E7D32" />}
                    key={widget.id}
                    primaryText={widget.name}
                  />
                );
              } return null;
            })}
          </List>
        </Drawer>
      </div>
    );
  }
}
SideDrawer.propTypes = {
  widgets: PropTypes.array,
  up: PropTypes.func,
};
