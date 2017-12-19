import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import AddCircle from 'material-ui/svg-icons/content/add-circle';

const styles = {
  contianer: {
    width: '15%',
    height: '90vh',
  }
};
const Sidebar = ({ widgets, up }) => (
  <Paper
    zDepth={1}
    style={styles.contianer}
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
        }
      })}
    </List>
  </Paper>
);
export default Sidebar;
