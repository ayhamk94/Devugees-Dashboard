import React from 'react';
import Example from './widgets/example/example';
import Widget from './mainComponents/Widget';

class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <h1>
          DEVUGEES DASHBOARD
        </h1>
        <div className="widgets-container">
          <Widget>
            <Example/>
          </Widget>
        </div>
      </div>

    )
  }
}
export default Dashboard;
