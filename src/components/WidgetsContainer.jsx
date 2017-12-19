import React from 'react';
import Paper from 'material-ui/Paper';

import Widget from './Widget';


const WidgetsContainer = ({ editMode, widgets, up }) => (
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
    {widgets.map((widget,index) => {
      if (widget.mounted) {
        return (
          <Widget
            index={index}
            up={up}
            editMode={editMode}
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
