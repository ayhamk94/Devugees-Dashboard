import React from 'react';
import Clock from '../widgets/clock/Clock';
import Widget from './Widget';

class Dashboard extends React.Component {
  render() {
    return(
      <div className="main">
        <h1>DEVUGEES DASHBOARD</h1>
        <div className="widgets-container">
          <Widget>
            <Clock/>
          </Widget>
        </div>
      </div>

    )
  }
}
export default Dashboard;
