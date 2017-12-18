import React from 'react';
import Paper from 'material-ui/Paper';

import Widget from './Widget';


const WidgetsContainer = props => (
  <Paper
    zDepth={0}
    style={{
              backgroundColor: '#b3b3b3',
              width: '80%',
              padding: '10px',
              height: '90vh',
              overflowY: 'scroll',
              display: 'flex',
              justifyContent: 'flex-start',
              flexWrap: 'wrap'
            }}
  >
    {props.widgets.map((widget) => {
      if (widget.mounted) {
        return (
          <Widget
            editMode={props.editMode}
            className={widget.className}
            key={widget.id}
            component={widget.component}
          />
      );
}
    })}
  </Paper>
);
export default WidgetsContainer;
