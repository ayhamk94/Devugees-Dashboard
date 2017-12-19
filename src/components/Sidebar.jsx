import React from 'react';

import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Drawer from 'material-ui/Drawer';

const Sidebar = ({
  widgets, up, drawerOpen, toggleDrawer
}) => (
  <Drawer
    docked={false}
    width={300}
    open={false}
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
              onRequestChange={toggleDrawer}

            />
          );
        }
      })}
    </List>
  </Drawer>
);
export default Sidebar;
