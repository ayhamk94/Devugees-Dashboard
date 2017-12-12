import React from 'react';
import Paper from 'material-ui/Paper';
import Example from '../widgets/example/example';
import Weather from '../widgets/weather/Weather';
import Clock from '../widgets/clock/Clock';
import Widget from './Widget';
import Header from './Header';

class Dashboard extends React.Component {
  render() {
    return(
      <div className="main">
        <div class="bg-primary p-2">
          <h1 class="color-white m-0">Devugees Dashboard</h1>
        </div>
        <Paper
          zDepth={2}
          style={{
            backgroundColor: '#EEEEEE',
            borderRadius: '0.2rem',
            width:'80%',
            padding:' 0.5rem',
            display:'flex',
            flexDirection:'column'
          }}>
          <div className="widget-container">
          <Widget>
            <Clock/>
          </Widget>
          <Widget>
            <Weather/>
          </Widget>
          </div>
        </Paper>

      </div>

    )
  }
}
export default Dashboard;
