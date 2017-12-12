import React from 'react';
import Paper from 'material-ui/Paper';
import Example from '../widgets/example/example';
import Weather from '../widgets/weather/Weather';
import Activity from '../widgets/activity/Activity';
import Clock from '../widgets/clock/Clock';
import Movie from '../widgets/movie/Movie';
import Widget from './Widget';
import Header from './Header';
import Masonry from 'react-masonry-component';

class Dashboard extends React.Component {
  render() {
    return(
      <div className="main">
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
          <Masonry>
          <Widget>
            <Clock/>
          </Widget>
          <Widget>
            <Weather/>
          </Widget>
          <Widget>
            <Movie/>
          </Widget>
          <Widget>
            <Activity/>
          </Widget>
          </Masonry>
        </Paper>
      </div>

    )
  }
}
export default Dashboard;
