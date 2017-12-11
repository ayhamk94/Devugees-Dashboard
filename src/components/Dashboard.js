import React from 'react';
import Example from './widgets/example/example';
import Widget from './mainComponents/Widget';
import News from './widgets/news/news.js';

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
          <Widget>
            <News/>
          </Widget>
        </div>
      </div>

    )
  }
}
export default Dashboard;
