import React from 'react';
import Example from '../widgets/example/example';
import Weather from '../widgets/weather/Weather';
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
          <Widget>
            <Weather/>
          </Widget>
        </div>
      </div>

    )
  }
}
export default Dashboard;
