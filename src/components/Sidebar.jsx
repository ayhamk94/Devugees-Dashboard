import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Add from 'material-ui/svg-icons/content/add';

const styles = {
  contianer: {
    width: '20%',
    height: '90vh',

  }
};
const Sidebar = props => (
  <Paper
    zDepth={2}
    style={styles.contianer}
  >
    <List>
      <Subheader>Avilable Widgets</Subheader>
      {props.widgets.map((widget) => {
        if (!widget.mounted) {
          return (
            <ListItem rightIcon={<Add />} key={widget.id} primaryText={widget.name} />
          );
        }
      })}
    </List>
  </Paper>
);
export default Sidebar;
